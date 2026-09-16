export type Genre="techno"|"house"|"trance"|"dnb"|"hardstyle"|"other"|"unknown";
export interface Dj{
    id:number;
    dexNumber:number;
    name:string;
    imageUrl:string|null;
    primaryGenre:Genre;
    popularity:number;
}
