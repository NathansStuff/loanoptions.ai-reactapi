type Nullable<T> = T | null;

export type University = {
 'state-provider': Nullable<string>
 country: string
 name: string
 web_pages: string[]
 domains: string[]
 alpha_two_code: string
}