import { Column } from 'react-table';
import {
  itemCorrupted,
  itemIcon,
  itemIlvlTier,
  itemLinks,
  itemName,
  itemValue,
  sparkLine,
} from '../columns/Columns';

const itemTableBulkSellColumns: Column<object>[] = [
  itemIcon({
    accessor: 'icon',
    header: 'Icon',
  }),
  itemName(
    {
      accessor: 'name',
      header: 'Name',
    },
    true
  ),
  itemIlvlTier({
    accessor: (row: any) => (row.tier > 0 ? row.tier : row.ilvl),
    header: 'Ilvl / Tier',
  }),
  itemCorrupted({
    accessor: 'corrupted',
    header: 'Corrupted',
  }),
  itemLinks({
    accessor: 'links',
    header: 'Links',
  }),
  {
    Header: 'Quality',
    accessor: 'quality',
    align: 'right',
  },
  {
    Header: 'Level',
    accessor: 'level',
    align: 'right',
  },
  {
    Header: 'Quantity',
    accessor: 'stackSize',
    align: 'right',
    sortType: 'basic',
  },
  sparkLine({
    accessor: 'sparkLine.totalChange',
    header: 'Price last 7 days',
  }),
  itemValue({
    accessor: 'calculated',
    header: 'Price (c)',
  }),
  itemValue({
    accessor: 'total',
    header: 'Total value (c)',
  }),
];

export default itemTableBulkSellColumns;
