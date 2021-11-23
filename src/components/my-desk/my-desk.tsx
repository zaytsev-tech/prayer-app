import { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { UserState } from '../../store/ducks/auth';
import { Column, columnRequest, MainColumn } from '../../store/ducks/columns';
import { ColumnBlock } from '../../ui/column-block';

interface UserSelectProp {
  auth: UserState;
}

interface ColumnsSelectProp {
  columns: MainColumn;
}

export const MyDesk = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state: UserSelectProp) => state.auth);
  const columns = useSelector((state: ColumnsSelectProp) => state.columns);
  useEffect(() => {
    dispatch(columnRequest(profile.user.token));
  }, []);
  return (
    <View>
      {Object.values(columns).map((column: Column) => {
        return <ColumnBlock key={column.id} column={column} />;
      })}
    </View>
  );
};
