
export const  getRequestConfigKey = (
  market: String
  // eslint-disable-next-line max-params
) => {
    const headers  =  {
      'X-VTEX-API-AppKey': 'vtexappkey-olimpica-UXPPPY',
      'X-VTEX-API-AppToken':'HKAOGEFZVAVCGQFYRLGUICPBEOQUODYQOOVQFFVJNQVTRJFZSMTCSLZGRJJRADFIPZPVPQVUTVBDYZRXIRGXZFXPSFZCCSLUEKNCBBFNYTHCLGLLECJSBSYRINDQNTUE',
    }
  return {
    headers,
    params:{
      an: market
    }
  }
}

export interface Headers {
  [key: string]: String
}
