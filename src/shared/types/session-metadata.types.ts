export interface LocationInfo {
    country: string
    city: string
    latidute: number
    longitide: number
}

export interface DeviceInfo {
    browser: string
    os: string
    type: string
}

export interface SessionMetaData {
    location: LocationInfo
    device: DeviceInfo
    ip: string
}