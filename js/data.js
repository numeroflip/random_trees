
class Post {
    constructor(title, sciName, content, imgUrl, id) {
        this.title = title;
        this.content = content;
        this.imgUrl = imgUrl;
        this.sciName = sciName
        this.id = id
    }
};

const post1 = new Post(
    'Larch',
    'Larix',
    ["The larch is native to much of the cooler temperate northern hemisphere, on lowlands in the far north, and high on mountains further south. Larches are among the dominant trees in the immense boreal forests of Russia and Canada.",

    "They are deciduous trees, growing from 15-50 m (50-160 ft) tall. The leaves are needle-like in shape. The needles turn yellow and fall in the late autumn, leaving the trees leafless through the winter.",

    "Larch cones are erect and small, green or purple, ripening brown 5-8 months after pollination. Those native to northern regions have small short cones, with the southerly species tending to have longer cones, with the longest cones produced by the southernmost species, in the Himalaya.",

    "Larch grows naturally in the mountains and forms large forests. It provides medicine and a variety of turpentine that flows through cracks in the trunk. This is a valuable species which is unfortunately inadequately distributed. It grows in all soil with some preference for moist deep scree. Its wood has a hard reddish core, is flexible and rich in resin."],

    './img/larch.jpg',
    1
)

const post2 = new Post (
    'Spruce',
    'Picea',
    ["There are 35 species of coniferous evergreen trees in the Family Pinaceae, found in the northern temperate and boreal (taiga) regions of Earth. Spruces are large trees, from 20–60 m (65–195 ft) tall when mature. They can be distinguished by their whorled branches and conical form. The needles are shed when 4–10 years old.",

    "Spruces are used as food plants by the larvae of some moths and butterflies. The word “spruce” derives from an obsolete term for Prussia. Scientists have found a cluster of Norway spruce in the mountains in western Sweden which, at an age of 9,550 years, is the world’s oldest known living trees.",

    "Spruce forest can be found covering large areas of Europe. They grow at higher altitudes. Spruce grows in any kind of soil provided the soil is cool and damp, even wet. Spruce roots are neither deep nor solidly anchored; they are therefore liable to blow over in strong winds. Spruce can be trimmed into nice hedges. The fact that the bark peels easily is a useful feature which enables it to be used for tanning; it helps protect and can prolong the life of the tree by ridding it of many dangerous insect pests. Spruce is used for paper manufacture, Christmas trees, musical instruments and resin."]
    ,
    './img/spruce.jpg',
    2
)

const post3 = new Post (
    'Pine',
    'Pinus',
    
    ["Pine is a coniferous tree in the genus Pinus, in the family Pinaceae. There are about 115 species of pine; although different authorities accept between 105 and 125 species. Pines are evergreen and rarely shrubs, growing 3–80 m (10-250 ft) tall, with the majority of the species reaching between 15-45 m (50-150 ft) in height. Pines are long-lived, typically reaching ages of 100–1,000 years, some even more. The one with greatest longevity is the Great Basin Bristlecone Pine, of which one at 4,840 years old (2008) is one of the oldest living organisms in the world.",

    "The bark of most pines is thick and scaly, but some species have thin, flaking bark. The new spring shoots are sometimes called “candles”; they are covered in brown or whitish bud scales and point upward at first, then later turn green and spread outward. These “candles” offer foresters a means to evaluate fertility of the soil and vigor of the trees.",

    "This tree forms huge forests in Europe and Northern Asia. It is most common in northern temperate terrain. Pine buds provide the base for various traditional remedies against chronic bronchial problems. Their use in the treatment of scurvy and their diuretic properties are also well known; the principle active ingredient being the turpentine in the scales."]
    ,
    './img/pine.jpg',
    3
);

const post4 = new Post (
    'Hornbeam',
    'Carpinus',
    ["Hornbeams are relatively small hardwood trees. The 30-40 species occur across much of the north temperate regions; it is native to most of Europe except for Ireland, northern Britain and most of Scandinavia. The common English name of “hornbeam” derives from the hardness of the wood (likened to horn) and the Old English beam, a tree (cognate with German “baum”). American Hornbeam is also occasionally known as blue-beech, ironwood, or musclewood.",

    "The fruit is a small nut, held in a leafy cone. Hornbeams are used as food plants by the larvae of some moth and butterfly species.",

    "The wood of hornbeams is very hard, giving rise to the name iron-wood and not used much due to the difficulty of working it. Its hardness has however lent it to use for carving boards, tool handles, coach wheels and other such items where a very tough, hard wood is required. It is sometimes coppiced to provide hardwood poles. It is also used in parquet flooring.",

    "The hornbeam grows in Europe in cool, slightly damp forests. It is also used in gardens and parks to form a hedgerow. At age 22 the Hornbeam produces fertile seeds and will produce ripe fruit every year after that. Hornbeam wood is delicate and has a very poor resistance to water. As a result it cannot be used for construction but can be used for fire wood."]
    ,
    './img/hornbeam.jpg',
    4
);

const post5 = new Post (
    'Beech',
    'Fagus sylvatica',
    ["This is a deciduous tree belonging to the beech family Fagaceae.",

    "The natural range extends from southern Sweden (with some isolated locations in southern Norway) to central Italy, west to France, northern Portugal, and central Spain, and east to northwest Turkey, where it integrates with the Oriental Beech, which replaces it further east. In the southern part of its range around the Mediterranean it grows only in mountain forests, at 600-1,800 m (2000-6000 ft) altitude. Although often regarded as native in southern England, recent evidence suggests that it did not arrive in England until about 4,000 BC, or 2,000 years after the English Channel formed after the ice ages; it could have been an early introduction by Stone age man, who used the nuts for food. Localized pollen records have been recorded in the North of England from the Iron Age by Sir Harry Godwin.",

    "It is a large tree, capable of reaching heights of up to 49 m (160 ft) tall and a 3m (10 ft) trunk diameter, though more typically 25-35 m (82-114 ft) tall and up to 1.5 m (3 ft) trunk diameter. It has a typical lifespan of 150 to 200 years, though sometimes up to 300 years. The appearance varies according to its habitat; in forest conditions it tends to have a long slender light-gray trunk with a narrow crown and erect branches. In isolation with good side light the trunk is short with a large and widely spreading crown with very long branches.",

    "The European Beech starts to flower when it is between 30-80 years old. The flowers are small catkins which appear shortly after the leaves in spring. The seeds, called beechnuts, are small triangular nuts; there are two nuts in each cupule. Flower and seed production is particularly abundant in years following a hot, sunny and dry summer, though rarely for two years in a row. The nuts are an important food for birds, rodents and in the past also people, although they are no longer eaten by man. Slightly toxic to man if eaten in large quantities due to the tannins they contain, the nuts were nonetheless pressed to obtain oil in 19th century England that was used for cooking and in lamps. They were also ground to make flour, which could be eaten after the tannins were leached out by soaking."]
    ,
    './img/beech.jpg',
    5
);

const post6 = new Post (
    'Ash',
    'Fraxinus',
    [
    "Ashes are usually medium to large trees, mostly deciduous though a few subtropical species are evergreen. There are 60 species of ash. It’s a small tree with sinuous branches. This tree is also cultivated on a large scale in Sicily and Columbia as well as occurring naturally in Europe. The seeds, popularly known as keys, are a type of fruit known as a samara.",

    "The tree’s common English name goes back to Old English æsc, a word also routinely used in Old English documents to refer to spears made of ash wood. The wood is hard, tough and very strong but elastic, extensively used for making bows, tool handles, quality wooden baseball bats, Hurley sticks and other uses demanding high strength and resilience. It is also often used as material for electric guitar bodies; known for its bright, cutting tone and sustaining quality, as well as snooker cues. Ash veneers are extensively used in office furniture. It also makes excellent firewood. The two most economically important species for wood production are White Ash in eastern North America, and European Ash in Europe. The ash is used in Traditional Chinese Medicine for diarrhea and dysentery. It is also good for the eyes where there are symptoms of redness, swelling, and pain.",

    "The ash grows near water in mountain ravines and on highland plateaus. It is native and abundant where the soil is deep and moist as in northern limestone areas. This tree reaches and even surpasses a height of a 30 m (100 feet) and a girth of 3 m (10 feet) at an age of 80 years."
    ],
    './img/ash.jpg',
    6
);

const post7 = new Post (
    'Holly',
    'Ilex Aquifolium',
    ["Hollies are shrubs and trees from 2–25 m (7-82 ft) tall, with a wide distribution in Asia, Europe, north Africa, and North and South America. The leaves are simple, and can be either deciduous or evergreen depending on the species. Pollination is mainly by bees and other insects. The fruits are small drupes usually with four to six pits, and range in colour from red to purple-black.",

    "Holly berries are mildly toxic and will cause vomiting and/or diarrhea when ingested by people. However they are extremely important food for numerous species of birds, and also are eaten by other wild animals. In the fall and early winter the berries are hard and apparently unpalatable. After being frozen or frosted several times, the berries soften, and become milder in taste. During winter storms, birds often take refuge in hollies, which provide shelter, protection from predators (by the spiny leaves), and food. The flowers are sometimes eaten by the larva of the Double-striped Pug moth. Holly is commonly referenced at Christmas time.",

    "Having evolved numerous species that are endemic to islands and small mountain ranges, and being highly useful plants, many hollies are now becoming rare. Tropical species are especially threatened by habitat destruction and overexploitation, and at least two have become extinct, with numerous others barely surviving.",

    "The leaves of this shrubby evergreen tree are a dark green with a shiny upper surface. It is usually found in woods and forests and in hilly country throughout Western Europe. Its wood which is very hard is particularly used for the manufacture of tool handles; its bark is used to make glue; its berries when ripe are thought to be laxative and the leaves have anti-inflammatory properties. Due to its splendid colour the holly is a very ornamental tree. It fares poorly when transplanted but does grow well when cut back. It could be used to form a very solid hedge although its growth is somewhat slow."],
    './img/holly.jpg',
    7
);

const post8 = new Post (
    'Poplar',
    'Populus',
    
    ["Poplar is a genus of between 25–35 species of flowering plants in the family Salicaceae, native to most of the Northern Hemisphere. English names variously applied to different species include poplar, aspen, and cottonwood.",

    "They are medium-sized to large or very large deciduous trees growing from 15 to 50 m (50-160 ft) tall, with trunks up to 2.5 meters (7 ft) in diameter. The bark on young trees is smooth, white to greenish or dark grey. The shoots are stout, with (unlike in the related willow) the terminal bud present. The stalk attached to the leaf is laterally flattened, so that breezes easily cause the leaves to wobble back and forth, giving the whole tree a “twinkling” appearance in a breeze. Leaf size is very variable even on a single tree. The leaves often turn bright gold to yellow before they fall during autumn.",

    "The flowers appear in early spring before the leaves. They are mainly very fast growing trees reaching large sizes with angular branches. A black poplar is common through most of Europe and in the temperate regions of Asia. The poplar originated in the Polar Regions and then spread south."]
    ,
    './img/poplar.jpg',
    8
);

const post9= new Post (
    'Willow',
    'Salix',
    ["There are about 400 species of this tree all over the world. A number of the species are cultivated for ornamental purposes. The branches are used to make barrels. Willows are found primarily on moist soils in cold and temperate regions of the Northern Hemisphere. Most species are known as willow, but some narrow-leaved shrub species are called osier, and some broader-leaved species are called sallow (the latter name is derived from the Latin word salix, willow).",

    "Willows are very cross-fertile and numerous hybrids occur both naturally and in cultivation. A well known example is the weeping willow (Salix × sepulcralis), very widely planted as an ornamental tree, which is a hybrid of a Chinese species and a European species – Peking willow and white willow.",

   " The willows all have abundant watery sap; bark which is heavily charged with salicylic acid; soft usually pliant, tough wood; slender branches and large, fibrous roots. The roots are remarkable for their toughness, size, and tenacity of life, and roots readily grow from aerial parts of the plant.",

    "Almost all willows take root very readily from cuttings or where broken branches lie on the ground. One famous example of such growth from cuttings involves the poet Alexander Pope, who begged a twig from a parcel tied with twigs sent from Spain to Lady Suffolk. This twig was planted and thrived, and legend has it that all of England’s weeping willows are descended from this first one.",

    "Willows are often planted on the borders of streams so that their interlacing roots may protect the bank against the action of the water. Frequently the roots are much larger than the stem which grows from them.",

    "The leaves and bark of the willow tree have been mentioned in ancient texts from Assyria, Sumer and Egypt as a remedy for aches and fever, and the Ancient Greek physician Hippocrates wrote about its medicinal properties in the 5th century BC. Native Americans across the American continent relied on it as a staple of their medical treatments. This is because they contain salicylic acid, the precursor to aspirin.",

    "In 1763 its medicinal properties were observed by the Reverend Edward Stone in England. He notified the Royal Society who published his findings. The active extract of the bark called salicin was isolated to its crystalline form in 1828 by Henri Leroux a French pharmacist, and Raffaele Piria an Italian chemist, who then succeeded in separating out the acid in its pure state. Salicin is acidic when in a saturated solution in water (pH = 2.4), and is called salicylic acid for that reason.",

    "In 1897 Felix Hoffmann created a synthetically altered version of salicin (in his case derived from the Spiraea plant), which caused less digestive upset than pure salicylic acid. The new drug formally Acetylsalicylic acid, was named aspirin by Hoffmann’s employer Bayer AG. This gave rise to the hugely important class of drugs known as non-steroidal anti-inflammatory drugs."],
    './img/willow.jpg',
    9
);

const post10= new Post (
    'Linden',
    'Tilia',
    ["This is a genus of about 30 species of trees native throughout most of the temperate Northern Hemisphere, in Asia (where the greatest species diversity is found) and Europe. The large leafed linden and the small leafed linden are found in all European forests up to the far north. The small leafed linden is a big tree reaching a height of 24-30 m (80 to 100 feet). In summer it has a vast number of aromatic flowers. The linden bears fruit in about its 20th year and then maintains an abundant annual output. The linden does well in all firm soils particularly damp or wet lime stone. The wood of this tree is white or slightly pink; it is homogenous, fine, light and soft. Since it is very easy to work with it is in much demand for carpentry, cabinet making and sculpture. The sound board and mechanism of the piano can also be made from this wood, as can ladders, pencils, matches and wood pulp for the manufacture of paper.",

    "Linden was originally the adjective, “made from lime-wood”, and from the late 16th century was also used as a noun, probably influenced by translations of German romance, as an adoption of Linden, the plural of German Linde. Neither the name nor the tree is related to the citrus fruit called “lime“.",

    "The tree produces fragrant nectar-producing flowers and the medicinal herb lime blossom. They are very important honey plants for beekeepers, producing a very pale but richly flavored honey. The flowers are also used for herbal tea, and this infusion: tannin, malic acid and tartaric acid and are perfumed by an essential oil. This is used in treating restlessness, hysteria, and headaches. This infusion is popular in Europe. Usually, the double-flowered lindens are used to make perfumes."
    ],
    './img/linden.jpg',
    10
);

const post11= new Post (
    'Random Forest',
    'Temere silvam',
    
    ["Congratulations! What you see is the bonus section :) This forest is not a forest of real trees per se, but nonetheless interesting. :)",

    `The term Random forest, or random decision forest is the name of a learning method in machine learning. -Whaaaat?! Wait, wait, don't be scared, it is in a sense just a special combination of decision trees (Or should I say trunks? :) )... -WHAAAAAT?! ... Okay, calm down, I have to admit it isn't the easiest topics of all... It is a supervised learning method for computers to analyze "old" data, and make future predictins (classify) on "new" data. It can be, and IS really helpful in what it does, it even have an extremely kickass name, so what do you need more??? You got me, it isn't that interesting for you, I understand... But... If it is, then I still won't be able to describe the idea in plain English for you, but at least thanks for reading.`]   
    ,
    './img/ranforest.jpg',
    11
);



const postsData = [post1, post2, post3, post4, post5, post6, post7, post8, post9, post10, post11];
