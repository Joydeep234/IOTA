import {Router} from 'express'
import {
    dashboard,
    registeruser,
    loginUser,
    logoutuser,
    writeReview,
    readReview,
    contactPage,
    adminLogin,
    adminregister,
    getContact,
    logoutadmin
} from '../controllers/user.controllers.js'

import {usercookieVerification,usercookieVerification2} from '../middlewares/loggedinUser.js'


const router= Router()

router.route('/home').get(usercookieVerification,dashboard)
router.route('/register').post(registeruser)
router.route('/login').post(loginUser)
router.route('/logout').get(logoutuser)
router.route('/writereview').post(writeReview)
router.route('/readReview').get(readReview)
router.route('/contact').post(contactPage)

router.route('/admin/register').post(adminregister)
router.route('/admin/login').post(adminLogin)
router.route('/admin/contact').get(getContact)
router.route('/admin/logout').get(logoutadmin)
router.route('/adminhome').get(usercookieVerification2,dashboard)

export default router;