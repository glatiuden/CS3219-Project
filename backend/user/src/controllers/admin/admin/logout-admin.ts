import _ from "lodash";
import IUser, { UserRole } from "../../../models/interfaces/user";
import { userService, accessTokenService } from "../../../services";

/**
 * @description Logout admin by destroying their token
 * @function logoutAdminController
 */
async function logoutAdminController(httpRequest: { context: { validated: { email: string } } }) {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const { email }: IUser = _.get(httpRequest, "context.validated");
    const admin_exists = await userService.findByEmail({ email, role: UserRole.ADMIN });

    if (!admin_exists) {
      throw new Error(`Admin by ${email} does not exists.`);
    }

    const is_logout = await accessTokenService.revoke({ user_id: admin_exists._id, user_role: "admin" });

    return {
      headers,
      statusCode: 200,
      body: {
        data: is_logout,
      },
    };
  } catch (err: any) {
    // TODO: add in error handling here
    throw {
      headers,
      statusCode: 404,
      body: {
        error: err.message,
      },
    };
  }
}

export default logoutAdminController;
