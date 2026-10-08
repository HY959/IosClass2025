import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import BottomTabBar from '../components/BottomTabBar';

const tips=[
 ['checkmark-circle-outline','Clear Formatting','Use a simple, clean layout with readable sans-serif fonts.'],
 ['trophy-outline','Quantify Achievements','Include metrics: e.g. “boosted user retention by 18%”.'],
 ['briefcase-outline','Tailor to the Job','Align your experience with key requirements from the job post.'],
 ['shield-checkmark-outline','Keep it Concise (1–2 pages)','Focus on relevant projects, experience and impact.'],
 ['bulb-outline','Use Action Verbs','Start points with powerful verbs like Led, Designed, Built.'],
];
export default function Guidelines(){return <SafeAreaView style={styles.safe} edges={['top']}><View style={styles.screen}><ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
 <View style={styles.header}><View style={styles.back}><Ionicons name="chevron-back" size={15} color={colors.textPrimary}/></View><View><Text style={styles.title}>Resume Guideline</Text><Text style={styles.meta}>HOW TO WRITE A STRONG RESUME</Text></View></View>
 <Text style={styles.question}>What Makes a Good Resume?</Text>
 {tips.map((t,i)=><View key={i} style={styles.tip}><View style={styles.tipIcon}><Ionicons name={t[0]} size={13} color={colors.accentBlue}/></View><View style={{flex:1}}><Text style={styles.tipTitle}>{t[1]}</Text><Text style={styles.tipText}>{t[2]}</Text></View></View>)}
 <Text style={styles.exampleTitle}>Resume Template Example</Text>
 <View style={styles.template}><Text style={styles.templateName}>Alex Mercer</Text><Text style={styles.templateRole}>PRODUCT DESIGNER</Text><View style={styles.line}/><Text style={styles.templateHeading}>SUMMARY</Text><View style={styles.shortLine}/><View style={styles.line}/><Text style={styles.templateHeading}>EXPERIENCE</Text><View style={styles.shortLine}/><View style={styles.line}/><Text style={styles.templateHeading}>SKILLS</Text><View style={styles.chips}><View/><View/><View/></View></View>
 <TouchableOpacity style={styles.primary}><Text style={styles.primaryText}>Download Sample Template</Text></TouchableOpacity>
 </ScrollView><BottomTabBar activeTab="guidelines"/></View></SafeAreaView>}
const styles=StyleSheet.create({safe:{flex:1,backgroundColor:'#F8FAFD'},screen:{flex:1},content:{paddingHorizontal:18,paddingTop:10,paddingBottom:24},header:{flexDirection:'row',alignItems:'center',marginBottom:12},back:{width:26,height:26,borderRadius:13,backgroundColor:'#fff',alignItems:'center',justifyContent:'center',marginRight:8},title:{fontSize:16,fontWeight:'800',color:colors.textPrimary},meta:{fontSize:7,fontWeight:'700',color:colors.accentBlue,marginTop:2},question:{fontSize:9,fontWeight:'800',color:colors.textPrimary,marginBottom:6},tip:{flexDirection:'row',alignItems:'flex-start',marginBottom:8},tipIcon:{width:24,height:24,borderRadius:5,backgroundColor:colors.lightBlueTint,alignItems:'center',justifyContent:'center',marginRight:7},tipTitle:{fontSize:8,fontWeight:'800',color:colors.textPrimary},tipText:{fontSize:6.7,color:colors.textSecondary,lineHeight:9,marginTop:1},exampleTitle:{fontSize:9,fontWeight:'800',color:colors.textPrimary,marginTop:6,marginBottom:6},template:{backgroundColor:'#fff',borderWidth:1,borderColor:'#E2E8F0',borderRadius:8,padding:12,minHeight:116},templateName:{fontSize:10,fontWeight:'800',textAlign:'center',color:colors.textPrimary},templateRole:{fontSize:5.5,textAlign:'center',color:colors.accentBlue,marginTop:2},line:{height:1,backgroundColor:'#E4E9F0',marginVertical:6},templateHeading:{fontSize:5.5,fontWeight:'800',color:colors.accentBlue},shortLine:{height:3,width:'80%',backgroundColor:'#EEF2F6',marginTop:3},chips:{flexDirection:'row',gap:5,marginTop:5},primary:{height:36,borderRadius:7,backgroundColor:colors.navy,alignItems:'center',justifyContent:'center',marginTop:9},primaryText:{fontSize:8.5,fontWeight:'800',color:colors.white}});
