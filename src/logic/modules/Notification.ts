import {
  MutationSavePushNotificationTokenArgs,
  NotificationPaginator,
} from "../../gql/graphql"
import { $api } from "../../services"
import Common from "./Common"
import { PushNotifications } from "@capacitor/push-notifications"
import { getPlatforms } from "@ionic/vue"

export default class Notification extends Common {
  // Base Variables
  public UnreadNotification = 0
  public ManyNotifications: NotificationPaginator | undefined

  // Mutation Variables

  public PushNotificationDeviceForm:
    | MutationSavePushNotificationTokenArgs
    | undefined

  public reset = () => {
    this.ManyNotifications = undefined
  }

  constructor() {
    super()
    this.defineReactiveProperty("UnreadNotification", 0)
    this.defineReactiveProperty("ManyNotifications", undefined)
  }

  // Queries
  public GetNotifications = async (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order = "DESC" as "DESC" | "ASC",
    whereQuery = ""
  ) => {
    return $api.notification
      .GetNotifications(page, count, orderType, order, whereQuery)
      .then((response) => {
        this.ManyNotifications = response.data?.GetNotifications
        return this.ManyNotifications
      })
  }

  // Mutations
  public SavePushNotificationDevice = () => {
    if (this.PushNotificationDeviceForm) {
      return $api.notification
        .SavePushNotificationToken(this.PushNotificationDeviceForm)
        .then(() => {
          // do something if you want :)
          return true
        })
    }
  }

  public MarkNotificationsAsRead = async (notificationIds: number[]) => {
    return $api.notification
      .MarkNotificationsAsRead(notificationIds)
      .then(() => {
        this.GetNotifications(1, 10)
      })
  }

  public addListeners = async () => {
    await PushNotifications.removeAllListeners()

    await PushNotifications.addListener("registration", (token) => {
      this.PushNotificationDeviceForm = {
        device_token: token.value,
        device_type: getPlatforms()[0],
      }
      this.SavePushNotificationDevice()
    })

    await PushNotifications.addListener("registrationError", (_err) => {
      // handle error here
    })

    await PushNotifications.addListener("pushNotificationReceived", () => {
      // handle push notification
      this.UnreadNotification++
      // Logic.User.SaveUserActivity("Push Notification Received", "action");
    })

    await PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification) => {
        // handle notification click

        const uuid = notification.notification.data.uuid

        this.MarkNotificationsAsRead([uuid])

        // Logic.User.SaveUserActivity("Push Notification Clicked", "action");
      }
    )
  }

  public registerNotifications = async () => {
    // set unread notification container

    if (localStorage.getItem("unread_notification") == null) {
      localStorage.setItem("unread_notification", "0")
    }

    let permStatus = await PushNotifications.checkPermissions()

    if (permStatus.receive === "prompt") {
      permStatus = await PushNotifications.requestPermissions()
    }

    if (permStatus.receive !== "granted") {
      console.error("User denied permissions!")
    }

    await PushNotifications.register()
  }

  public getDeliveredNotifications = async () => {
    const notificationList = await PushNotifications.getDeliveredNotifications()
    console.log("delivered notifications", notificationList)
  }
}
