export const processText = (text: string) : string[] => {
    let withoutPunctuation: string = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let finalString: string = withoutPunctuation.replace(/\s{2,}/g," ");
    return finalString.split(" ");
}