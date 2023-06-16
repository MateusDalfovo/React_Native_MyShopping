import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyShopping</Text>
      <Text style={styles.sub_title}>monte sua lista de compra te ajudar nas compras</Text>
      <StatusBar style="auto" />

      <TextInput
        style={styles.input_email}
        placeholder=" Email.."
      />

      <TextInput
        style={styles.input_senha}
        placeholder=" Senha.."
      />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textBotao}>ENTRAR</Text>
      </TouchableOpacity>

      <Text style={styles.rec}>Recuperar Senha</Text>
      <Text style={styles.create_conta}>Criar minha conta</Text>

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#887bba'
  },

  sub_title: {
    color: '#887bba',
    marginBottom: '4%'

  },

  input_email: {
    width: '80%',
    height: '5%',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    marginBottom: '4%',
    borderRadius: 3
  },

  input_senha: {
    width: '80%',
    height: '5%',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    marginBottom: '4%',
    borderRadius: 3

  },

  botao:{
      width: '70%',
      height: '6%',
      backgroundColor: '#2ab76b',
      borderRadius: 3,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '10%'
      
  }, 
  textBotao:{
    color: 'white'
  },
  
  rec:{
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000',
    marginRight: '48%',
  },

  create_conta:{
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: '48%',
    marginTop: '-4%'
  }

});
