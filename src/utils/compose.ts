const compose = (...funcs: any[]) => (comp: any) => {
    return funcs.reduceRight(
        (wrapped, f) => f(wrapped), comp);
};

export default compose;