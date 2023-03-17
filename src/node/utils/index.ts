import {AxiosError} from "axios";
import {AuthenticationError, ForbiddenError, UserInputError} from "@vtex/api";

export function generateRandomName() {
    return (1 + Math.random()).toString(36).substring(2);
}

export async function getSecret(ctx: Context) {
    const {
        clients: {vBase},
    } = ctx;

    const secret = await vBase.getSecret("secret.txt");

    const data = JSON.parse(secret.data.toString());

    return data;
}

export function statusToError(e: any) {
    if (!e.response) {
        throw e;
    }

    const {response} = e as AxiosError;
    const {status} = response!;

    if (status === 401) {
        throw new AuthenticationError(e);
    }
    if (status === 403) {
        throw new ForbiddenError(e);
    }
    if (status === 400) {
        throw new UserInputError(e);
    }

    throw e;
}
