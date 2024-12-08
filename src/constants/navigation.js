export const navigationList = [
  {
    title: 'Getting started',
    child: [{ title: 'Installation', to: '/documentation/getting-started/installation' }]
  },
  {
    title: 'Prototypes',
    child: [
      {
        title: 'Array',
        to: '/documentation/prototypes/array',
        subChild: [
          { title: 'first()', to: '/documentation/prototypes/array/first' },
          { title: 'last()', to: '/documentation/prototypes/array/last' },
          { title: 'findById()', to: '/documentation/prototypes/array/find-by-id' },
          { title: 'findIndexById()', to: '/documentation/prototypes/array/find-index-by-id' },
          { title: 'filterById()', to: '/documentation/prototypes/array/filter-by-id' },
          { title: 'compare()', to: '/documentation/prototypes/array/compare' }
        ]
      }
    ]
  },
  {
    title: 'Types',
    child: [
      { title: 'isBoolean()', to: '/documentation/types/is-boolean' },
      { title: 'isString()', to: '/documentation/types/is-string' },
      { title: 'isObject()', to: '/documentation/types/is-object' },
      { title: 'isArray()', to: '/documentation/types/is-array' },
      { title: 'isFunction()', to: '/documentation/types/is-function' },
      { title: 'isNumber()', to: '/documentation/types/is-number' }
    ]
  },
  {
    title: 'Content',
    child: [
      { title: 'isNotEmptyObject()', to: '/documentation/content/is-not-empty-object' },
      { title: 'isNotEmptyArray()', to: '/documentation/content/is-not-empty-array' },
      { title: 'isNotEmptyString()', to: '/documentation/content/is-not-empty-string' }
    ]
  }
]
