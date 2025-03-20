import React from 'react';
import { Button, ButtonGroup } from '@mui/material';

const FilterPanel = ({ onFilterChange }) => {
  const categories = ['Все', 'покемоны', 'покеболы', 'дополнительно'];

  return (
    <ButtonGroup variant="contained" sx={{ my: 2 }}>
  {categories.map((category) => (
    <Button
      key={category}
      onClick={() => onFilterChange(category)}
      sx={{
        backgroundColor: 'rgb(237, 195, 105)'
        }}
    >
      {category}
    </Button>
  ))}
</ButtonGroup>

  );
};

export default FilterPanel;