let languages = {
    spokenLanguages: {
        askelonian: {
            displayName: "Askelonian",
            relatedTo: ["grailic", "oldGrailic", "proto"],
            description: "The language of the nation of Askelon and the most common second language spoken along the river trade routes of Flax."
        },
        centari: {
            displayName: "Centari",
            relatedTo: [],
            description: "The language of the Centari people remains largely unchanged since their sudden appearance on Flax."
        },
        denja: {
            displayName: "Denja",
            relatedTo: ["garjant"],
            description: "The historic language of the denja, it is still spoken many many denja throughout flax and is the primary language of Flax's great marshes."
        },
        galteranian: {
            displayName: "Galteranian",
            relatedTo: ["oldGrailic"],
            description: "The language of the nation of Galteran."
        },
        garjant: {
            displayName: "Garjant",
            relatedTo: ["denja"],
            description: "The language of the monstrous Garjants, spoken almost exclusively by them and those who visit the breath bogs."
        },
        grailic: {
            displayName: "Grailic",
            relatedTo: ["askelonian", "oldGrailic", "islander", "proto", "southron"],
            description: "The language of the fractured nations that once made up the kingdom of Grail and the most common second language spoken among all of Flax particularly in coastal regions."
        },
        islander: {
            displayName: "Islander",
            relatedTo: ["grailic", "oldGrailic"],
            description: "The language of the so called men of the isles along with the primary language of many isolated islands along Flax's easter coast."
        },
        kaazt: {
            displayName: "Kaazt",
            relatedTo: [],
            description: "The language of the jungle dwelling Kaazt."
        },
        mablen: {
            displayName: "Mablen",
            relatedTo: [],
            description: "The musical language of the mablen and the language much of history is recorded in."
        },
        oldGrailic: {
            displayName: "Old Grailic",
            relatedTo: ["askelonian", "galteranian", "grailic", "islander", "proto", "southron"],
            description: "The, now dead, language of first nation of Grail long before it expanded into its last kingdom."
        },
        proto: {
            displayName: "Proto",
            relatedTo: ["askelonian", "grailic", "oldGrailic"],
            description: "The language of the reclusive nation of Proto."
        },
        rhosk: {
            displayName: "",
            relatedTo: [],
            description: "The language of the rhosk, spoken in the Norther Desert and many of the other northern territories."
        },
        shimmersTongue: {
            displayName: "Shimmer's Tongue",
            relatedTo: ["tor", "torleni"],
            description: "The language of the mountain range populated by the descendants of Shimmer known as the Trail of Eyes."
        },
        southron: {
            displayName: "Southron",
            relatedTo: ["galteranian", "grailic", "oldGrailic"],
            description: "The language of the denizens of the Southern Desert."
        },
        tor: {
            displayName: "Tor",
            relatedTo: ["shimmersTongue", "torleni", "torotro"],
            description: "The, now dead, language of the first Tor'leni before Shimmer's blood separated them and before the first failed transformations of the pure blooded strain."
        },
        torleni: {
            displayName: "Tor'leni",
            relatedTo: ["shimmersTongue", "tor"],
            description: "The language of the Tor'leni followers of Tuice that populate Mt. Milomb."
        },
        torotro: {
            displayName: "Tor'otro",
            relatedTo: ["tor"],
            description: "The bastardized language spoken by the descendants of many of the strains that are the result from failed Tor'leni transformations such as the Tor'joven and Tor'ninos."
        }
    },
    writtenLanguages: {
        centari: {
            displayName: "Centari Alphabet",
            description: "The Centari had been writing for centuries before their arrival on Flax and they brought their 114 character alphabet that is used almost exclusively to record their own language."
        },
        grailic: {
            displayName: "Grailic Alphabet",
            description: "The most common form of writing on Flax; this 34 character, largely, phonetic alphabet is used for all Grailic languages and often records other languages as well though with less standardization."
        },
        rhosk: {
            displayName: "Rhosk Symbology",
            description: "A symbolic alphabet used by the Rhosk but related more to ideas than that language in particular, many scholars learn Rhosk Symbology without learning the spoken tongue."
        },
        tor: {
            displayName: "Tor Symbology",
            description: "An extremely complicated symbolic alphabet where each character has multiple meanings that is used to read and write in Shimmer's Tongue, Tor, and Tor'leni."
        }
    }
};

module.exports = languages;
