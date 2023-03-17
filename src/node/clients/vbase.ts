import {InstanceOptions, IOContext, JanusClient, VBase} from '@vtex/api'

const FIVE_SECONDS_MS = 5 * 1000

export class VBaseClient extends JanusClient {
    public constructor(context: IOContext, options?: InstanceOptions) {
        super(context, {
            ...options,
            headers: {
                ...(options && options.headers),
                VtexIdClientAutCookie: context.authToken
            },
            timeout: FIVE_SECONDS_MS,
        })
    }

    public getSecret = (fileName: any) => {
        const service: any = process.env.VTEX_APP_NAME

        const client = new VBase(this.context)

        return client.getFile(service, fileName)
    }

    public saveFile = (fileName: string, data: any) => {
        const service: any = process.env.VTEX_APP_NAME

        const client = new VBase(this.context)

        const Readable = require('stream').Readable
        const s = new Readable()
        s._read = () => undefined
        s.push(JSON.stringify(data))
        s.push(null)

        return client.saveFile(service, fileName, s, false)
    }
}