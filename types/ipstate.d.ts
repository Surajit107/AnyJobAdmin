import { User } from "./authTypes"

export type IPData = {
ip: string,
network: string,
version: string,
city: string,
region: string,
region_code: string,
country: string,
country_name: string,
country_code: string,
country_code_iso3: string,
country_capital: string,
country_tld: string,
continent_code: string,
in_eu: boolean,
postal: number,
latitude: string,
longitude: string,
timezone: string,
utc_offset: string,
country_calling_code: string,
currency: string,
currency_name: string,
languages: string,
country_area: number,
country_population: number,
asn: string,
org: string
ipAddress?: string
userId?: Array<User>
route?: string
timestamp?:string
userAgent?:string
}

