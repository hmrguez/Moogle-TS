function computeLPSArray(pat: string, M: number, lps: number[]): void {
    let len = 0;
    let i = 1;
    lps[0] = 0;

    while (i < M) {
        if (pat.charAt(i) == pat.charAt(len)) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len != 0) {
                len = lps[len - 1];
            } else {
                lps[i] = len;
                i++;
            }
        }
    }
}

export function* KMPSearch(pat: string, txt: string): IterableIterator<number> {
    let M = pat.length;
    let N = txt.length;

    let lps: number[] = [];
    let j = 0;

    computeLPSArray(pat, M, lps);

    let i = 0;
    while ((N - i) >= (M - j)) {
        if (pat.charAt(j) == txt.charAt(i)) {
            j++;
            i++;
        }
        if (j == M) {
            if(i == txt.length || txt[i] == ' ' || !txt[i].match(/[a-z]/i))
                yield (i - j);

            j = lps[j - 1];
        }

        else if (i < N && pat.charAt(j) != txt.charAt(i)) {
            if (j != 0)
                j = lps[j - 1];
            else
                i = i + 1;
        }
    }
}