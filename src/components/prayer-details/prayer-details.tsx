import { FC, useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styled, { ThemeContext } from 'styled-components';

import { Prayer } from '../../store/ducks/prayers';
import { IconAddMember, IconLineUp } from '../../ui/icons';
import { CommentsBlock } from '../../views/comments-block';

interface PrayerDetailsProp {
  prayer: Prayer;
}

export const PrayerDetails: FC<PrayerDetailsProp> = ({ prayer }) => {
  const theme = useContext(ThemeContext);
  return (
    <ScrollView>
      <Container>
        <LastUpdated>
          <IconLineUp width={25} height={25} color={theme.colors.red} />
          <UpdatedText>Last prayed 8 min ago</UpdatedText>
        </LastUpdated>
        <DetailsView>
          <Detail>
            <HeaderDetail>July 25 2017</HeaderDetail>
            <MoreDetails>Date Added</MoreDetails>
            <OpenedDetails>Opened for 4 days</OpenedDetails>
          </Detail>
          <Detail>
            <HeaderDetail>123</HeaderDetail>
            <MoreDetails>Times Prayed Total</MoreDetails>
          </Detail>
          <Detail>
            <HeaderDetail>63</HeaderDetail>
            <MoreDetails>Times Prayed by Me</MoreDetails>
          </Detail>
          <Detail>
            <HeaderDetail>60</HeaderDetail>
            <MoreDetails>Times Prayed by Others</MoreDetails>
          </Detail>
        </DetailsView>
        <Members>
          <HeaderTitle>MEMBERS</HeaderTitle>
          <MemberIcons>
            <MemberIcon>JZ</MemberIcon>
            <MemberIcon>RB</MemberIcon>
            <AddMember>
              <IconAddMember width={38} height={38} color={theme.colors.brown} />
            </AddMember>
          </MemberIcons>
        </Members>
        <Comments>
          <HeaderTitle>COMMENTS</HeaderTitle>
          <CommentsBlock prayer={prayer} />
        </Comments>
      </Container>
    </ScrollView>
  );
};

const Container = styled(View)`
  background: ${({ theme: { colors } }) => colors.white};
  width: 100%;
`;

const LastUpdated = styled(View)`
  padding-top: 14px;
  padding-bottom: 14px;
  flex-direction: row;
  align-items: space-between;
`;

const UpdatedText = styled(Text)`
  margin-bottom: 3px;
  color: ${({ theme: { colors } }) => colors.textBlack};
`;

const DetailsView = styled(View)`
  border-bottom-color: ${({ theme: { colors } }) => colors.borderBlack};
  border-bottom-width: 1px;
  flex-direction: row;
  align-self: stretch;
  flex-wrap: wrap;
`;

const Detail = styled(View)`
  border-color: ${({ theme: { colors } }) => colors.borderBlack};
  border-width: 1px;
  border-left-width: 0px;
  border-bottom-width: 0px;
  flex-basis: 50%;
  padding: 26px 15px;
`;

const HeaderDetail = styled(Text)`
  ${({ theme: { typography } }) => typography.body.mainDetails};
`;

const MoreDetails = styled(Text)`
  ${({ theme: { typography } }) => typography.body.moreDetails};
`;

const OpenedDetails = styled(Text)`
  ${({ theme: { typography } }) => typography.body.moreDetails};
  color: ${({ theme: { colors } }) => colors.blue};
`;

const Members = styled(View)`
  padding: 20px 0px;
`;

const HeaderTitle = styled(Text)`
  ${({ theme: { typography } }) => typography.body.headerDetails};
  padding: 15px;
`;

const MemberIcons = styled(View)`
  margin-top: 13px;
  flex-direction: row;
  padding: 0px 15px;
`;

const MemberIcon = styled(Text)`
  margin-right: 5px;
  padding: 6px 7px;
  width: 32px;
  height: 32px;
  color: ${({ theme: { colors } }) => colors.white};
  background: ${({ theme: { colors } }) => colors.blue};
  border-radius: 30px;
  overflow: hidden;
`;

const AddMember = styled(TouchableOpacity)`
  margin-top: -3px;
`;

const Comments = styled(View)`
  margin-top: 0px;
`;
