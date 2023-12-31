import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ReactNativeModal from 'react-native-modal';
import {crossicon} from '../../../utils/images';
import {
  hp,
  wp,
  normalize,
  Montserrat,
  MontserratBold,
} from '../../../utils/Constants';
import InputText from '../InputText';

const AddToTeamModal = ({visible, setVisible}) => {
  const [email, setEmail] = useState('');
  return (
    <ReactNativeModal
      isVisible={visible}
      style={styles.modalStyle}
      onBackdropPress={() => setVisible(false)}>
      <View style={styles.container}>
        <View style={styles.headerbox}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Text style={styles.btntxt}>Cancel</Text>
            </TouchableOpacity>

            <Text style={styles.headertxt}>Grow Our Team</Text>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Text style={styles.btntxt}>Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.invitebox}>
            <Text>
              You can invite them to join our team by adding their email address
              and sending an invite code
            </Text>

            <Text style={styles.emailtxt}>Email</Text>
            <InputText
              placeholder="Email address"
              value={email}
              multiline={false}
              onChangeText={setEmail}
              containerstyle={styles.containerstyle}
              textinputstyle={styles.textinputstyle}
            />
          </View>
        </View>
      </View>
    </ReactNativeModal>
  );
};

export default AddToTeamModal;

const styles = StyleSheet.create({
  modalStyle: {margin: 0, padding: 0},
  container: {
    backgroundColor: 'white',
  },
  headerbox: {overflow: 'hidden', paddingBottom: 4},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    backgroundColor: 'white',
    paddingVertical: hp(2),

    shadowColor: '#545454',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  crossicon: {
    width: wp(5),
    height: wp(5),
  },
  headertxt: {
    fontFamily: Montserrat,
    fontSize: normalize(12),
    lineHeight: normalize(15),
    color: '#545454',
  },
  btntxt: {
    fontFamily: Montserrat,
    fontSize: normalize(14),
    color: '#D12E2F',
  },
  invitebox: {
    marginHorizontal: wp(4),
    marginTop: hp(2),
  },
  emailtxt: {
    marginTop: hp(2),
    fontFamily: MontserratBold,
    fontSize: normalize(14),
    lineHeight: normalize(18),
    color: '#D12E2F',
    marginLeft: wp(2),
  },
  containerstyle: {
    height: hp(6),
    marginBottom: hp(2),
    flex: 0,
    backgroundColor: '#F2F2F2',
    marginTop: hp(0.5),
  },
  textinputstyle: {
    color: 'black',
  },
});
