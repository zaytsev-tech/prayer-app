import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { Column, MainColumn } from '../../store/ducks/columns';
import { ColumnBlock } from '../../ui/column-block';

interface ColumnsSelectProp {
  columns: MainColumn;
}

export const BlockColumns = () => {
  const columns = useSelector((state: ColumnsSelectProp) => state.columns);
  return (
    <View>
      {Object.values(columns).map((column: Column) => {
        return <ColumnBlock key={column.id} column={column} />;
      })}
    </View>
  );
};
