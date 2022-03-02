/**
 * https://github.com/IonicaBizau/git-url-parse is broken. Using a local copy.
 * @see https://github.com/IonicaBizau/git-url-parse/issues/130#issuecomment-890309747
 */
declare function gitUrlParse(url: string): any;
declare namespace gitUrlParse {
    var stringify: (obj: any, type: any) => any;
}
export default gitUrlParse;
//# sourceMappingURL=git-url-parse.d.ts.map