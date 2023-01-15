import heraldImage from '../images/ranks/herald.png'
import guardianImage from '../images/ranks/guardian.png'
import crusaderImage from '../images/ranks/crusader.png'
import archonImage from '../images/ranks/archon.png'
import legendImage from '../images/ranks/legend.png'
import ancientImage from '../images/ranks/ancient.png'
import divineImage from '../images/ranks/divine.png'

export const getRankFromRatingValue = (rating: number): string => {
    let result = heraldImage;
    if (rating > 6500) {
        result = divineImage;
    } else if (rating > 5700) {
        result = ancientImage;
    } else if (rating > 4900) {
        result = legendImage;
    } else if (rating > 3300) {
        result = archonImage;
    } else if (rating > 2300) {
        result = crusaderImage;
    } else if (rating > 1200) {
        result = guardianImage;
    }
    return result;
}