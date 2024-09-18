interface MajorCredits {
    credits: number;

}

interface MinorCredits {
    credits: number;
}

const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits) => {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'major'
    }

}

const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits) => {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'minor'
    }

}