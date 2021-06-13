import UsdRate from "./UsdRate"
import SmsObserver from './SmsObserver'
import EmailObserver from './EmailObserver'

const usdRate = new UsdRate()

const sms = new SmsObserver(usdRate)
const email = new EmailObserver(usdRate)

usdRate.subscribe(sms)
usdRate.subscribe(email)

// ...changes
usdRate.update(78)

usdRate.unsubscribe(sms)
usdRate.update(74.36)