import { getCategoryWithOccurrences } from './index'

describe('Utils', () => {
  describe('getCategoryWithOccurrences function', () => {
    it('should return the category with occurence', () => {
      const categoriesInput = [
        { category_id: 'MLA10' },
        { category_id: 'MLA10' },
        { category_id: 'MLA10' },
        { category_id: 'MLA11' },
        { category_id: 'MLA12' }
      ]

      expect(getCategoryWithOccurrences(categoriesInput)).toEqual('MLA10')
    })

    it('should return the categoryId previousValue than current', () => {
      const categoriesInput = [
        { category_id: 'MLA11' },
        { category_id: 'MLA10' },
        { category_id: 'MLA10' },
        { category_id: 'MLA10' },
        { category_id: 'MLA12' }
      ]

      expect(getCategoryWithOccurrences(categoriesInput)).toEqual('MLA10')
    })
  })
})
