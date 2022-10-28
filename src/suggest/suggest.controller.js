
exports.suggest = async (req, res) => {
    const response = {
        queryContext: {
            originalQuery: 'specialty hand tools',
        },
        // suggestionGroups: [
        //     {
        //         catalogName: 'canadiantire_odp',
        //         view: 'default',
        //         querySuggestions: [
        //             {
        //                 query: 'specialty hand tools',
        //                 displayText: 'specialty hand tools',
        //             },
        //         ],
        //         searchSuggestions: [
        //             {
        //                 sale_price: 10,
        //                 thumb_image: '',
        //                 title: 'Telescopic Magnetic Pick-Up Tool, 19-in',
        //                 url: '/en/pdp/telescopic-magnetic-pick-up-tool-19-in-0586812p.html?_br_psugg_q=specialty+hand+tools',
        //                 pid: '0586812P',
        //             },
        //             {
        //                 sale_price: 10,
        //                 thumb_image: '',
        //                 title: 'Bosch Metal Polisher with Variable-Speed Control, 7-in',
        //                 url: '/en/pdp/bosch-metal-polisher-with-variable-speed-control-7-in-0547137p.html?_br_psugg_q=specialty+hand+tools',
        //                 pid: '0547137P',
        //             },
        //         ],
        //         product_suggest_query: null,
        //         attributeSuggestions: [
        //             {
        //                 name: 'Specialty Hand Tools',
        //                 value: 'DC0001804',
        //                 attributeType: 'category',
        //             },
        //             {
        //                 name: 'Buffer & Polishers',
        //                 value: 'DC0002024',
        //                 attributeType: 'category',
        //             },
        //         ],
        //     },
        // ],
    };

    res.send(response);
};