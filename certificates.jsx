import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import BottomTabBar from '../components/BottomTabBar';

const certs = [
  { icon:'code-slash-outline', name:'AWS Cloud Practitioner', issuer:'Amazon Web Services', date:'Issued: Nov 2025' },
  { icon:'school-outline', name:'Certified ScrumMaster', issuer:'Scrum Alliance', date:'Issued: Oct 2025' },
  { icon:'bulb-outline', name:'Google UX Design', issuer:'Coursera', date:'Issued: Feb 2025' },
];

export default function Certificates(){
  return <SafeAreaView style={styles.safe} edges={['top']}><View style={styles.screen}>
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.header}><View style={styles.back}><Ionicons name="chevron-back" size={15} color={colors.textPrimary}/></View><View style={{flex:1}}><Text style={styles.title}>Certificates</Text><Text style={styles.meta}>5 EARNED BADGES</Text></View></View>
      <View style={styles.grid}>
        {certs.map((c,i)=><CertificateCard key={i} {...c}/>)}
        <TouchableOpacity style={styles.addCard}><Ionicons name="add" size={18} color={colors.accentBlue}/><Text style={styles.addText}>Add New Badge</Text></TouchableOpacity>
      </View>
      <View style={styles.status}><Ionicons name="shield-checkmark-outline" size={18} color={colors.white}/><View style={{flex:1,marginLeft:8}}><Text style={styles.statusTitle}>StarCandidate Status</Text><Text style={styles.statusText}>3+ certificates and proof of work visibility</Text></View></View>
    </ScrollView><BottomTabBar activeTab="home"/>
  </View></SafeAreaView>
}

const CertificateCard=({icon,name,issuer,date})=><View style={styles.card}><View style={styles.certIcon}><Ionicons name={icon} size={17} color={colors.navy}/></View><Text style={styles.name}>{name}</Text><Text style={styles.issuer}>{issuer}</Text><Text style={styles.date}>{date}</Text></View>;
const styles=StyleSheet.create({safe:{flex:1,backgroundColor:'#F8FAFD'},screen:{flex:1},content:{paddingHorizontal:18,paddingTop:10,paddingBottom:24},header:{flexDirection:'row',alignItems:'center',marginBottom:12},back:{width:26,height:26,borderRadius:13,backgroundColor:'#fff',alignItems:'center',justifyContent:'center',marginRight:8},title:{fontSize:16,fontWeight:'800',color:colors.textPrimary},meta:{fontSize:8,fontWeight:'700',color:colors.accentBlue,marginTop:2},grid:{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'},card:{width:'48%',minHeight:116,backgroundColor:'#fff',borderWidth:1,borderColor:'#E2E8F0',borderRadius:8,padding:9,marginBottom:9},certIcon:{width:28,height:28,borderRadius:5,backgroundColor:colors.lightBlueTint,alignItems:'center',justifyContent:'center',marginBottom:7},name:{fontSize:8,fontWeight:'800',color:colors.textPrimary,lineHeight:11},issuer:{fontSize:7,color:colors.textSecondary,marginTop:3},date:{fontSize:6.5,color:colors.textMuted,marginTop:5},addCard:{width:'48%',minHeight:116,borderWidth:1,borderStyle:'dashed',borderColor:'#76A9F4',borderRadius:8,alignItems:'center',justifyContent:'center',marginBottom:9},addText:{fontSize:8,fontWeight:'700',color:colors.accentBlue,marginTop:4},status:{backgroundColor:colors.navy,borderRadius:8,padding:10,flexDirection:'row',alignItems:'center',marginTop:2},statusTitle:{fontSize:8,fontWeight:'800',color:colors.white},statusText:{fontSize:6.5,color:'#DCE8F8',marginTop:2}});
