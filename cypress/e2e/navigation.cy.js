const productTests = [
  {
    product: 'Radiant Tee',
    expected: {
      chain: 'match',
      url: /radiant-tee/i
    }
  },
  {
    product: 'Breathe-Easy Tank',
    expected: {
      chain: 'match',
      url: /breathe-easy-tank/i
    }
  },
];
const categoryTests = [
  {
    name: 'Women',
    expected: {
      chain: 'match',
      url: /women/i,
      categories:[
        'Tops',
        'Bottoms'
      ]
    }
  },
  {
    name: 'Men',
    expected: {
      chain: 'match',
      url: /men/i,
      categories:[
        'Tops',
        'Bottoms'
      ]
    }
  },
  {
    name: 'Gear',
    expected: {
      chain: 'match',
      url: /gear/i,
      categories:[
        'Bags',
        'Fitness Equipment',
        'Watches'
      ]
    }
  },
  {
    name: 'Training',
    expected: {
      chain: 'match',
      url: /training/i,
      categories:[ 'Video Download' ]
    }
  }
]
describe('navigation', () => {
  beforeEach(()=> cy.intercept({ resourceType: /xhr|fetch/ }, { log: false }));
  for (const data of productTests) {
    it(`Product: ${data.product} page`, () => { 
      cy.visit('/')
        .get('a.product-item-link').contains(data.product)
        .click()
        .url()
        .should(data.expected.chain, data.expected.url);
    }); 
  }
  for (const data of categoryTests) {
    it(`Category: ${data.name}`, () => { 
    cy.visit('/')
      .get('span').contains(data.name)
      .click()
      .url()
      .should(data.expected.chain, data.expected.url)
      .get('h1').contains(data.name)
      .get('ol.items>li>a')
      .should(($lis) => {
        const len = data.expected.categories.length;
        expect($lis).to.have.length(len)
        for(let i=0; i<len; i++) {
          expect($lis.eq(i)).to.contain(data.expected.categories[i])
        }
      })
    });
  }
})