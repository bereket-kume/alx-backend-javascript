export default function iterateThroughObject(reportWithIterator) {
    const iterator = reportWithIterator[Symbol.iterator]();

    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            return iterator.next();
        },
        getFormattedString() {
            const items = [];
            let result = iterator.next();

            while (!result.done) {
                items.push(result.value);
                result = iterator.next();
            }

            return items.join(' | ');
        }
    };
}
