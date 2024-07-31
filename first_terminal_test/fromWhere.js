export default function fromWhere(registrationNumber) {
    switch (registrationNumber) {
        case 'CY 567489':
            return 'Bellville';
            break;
        case 'CJ 343502':
            return 'Paarl';
            break;
        case 'CA 987504':
            return 'Cape Town';
            break;
        case 'ZN 568593':
            return 'Some other place!';
            break;
    }
}


