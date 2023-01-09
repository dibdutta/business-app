import { useProducts } from 'contexts/products-context';

import * as S from './style';

export const availablePrices = ['<700', '<1000', '<2000', '<3000', '>1000', '>2000', '>3000'];

const Filter = () => {
  const { filters, filterProducts } = useProducts();

  const selectedCheckboxes = new Set(filters);

  const toggleCheckbox = (label: string) => {
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label);
    } else {
      selectedCheckboxes.add(label);
    }

    const filters = Array.from(selectedCheckboxes) as [];
    filterProducts(filters);
  };

  const createCheckbox = (label: string) => (
    <S.Checkbox label={label} handleOnChange={toggleCheckbox} key={label} />
  );

  const createCheckboxes = () => availablePrices.map(createCheckbox);

  return (
    <S.Container>
      <S.Title>Prices:</S.Title>
      {createCheckboxes()}
    </S.Container>
  );
};

export default Filter;
