import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import BottomTabBar from '../components/BottomTabBar';

const jobs = [
  { role: 'Software Engineering Intern', company: 'TechCorp Industries', period: 'Jun 2025 – Aug 2025', place: 'San Francisco, CA (Remote)', desc: 'Developed API integrations using Node.js and improved frontend dashboard rendering speed by 24% using React-based technologies.' },
  { role: 'Lead Student Developer', company: 'University Computer Science Club', period: 'Sep 2024 – May 2025', place: 'Led a team of 6 developers', desc: 'Built a production-ready web app, presented to 500+ users and received positive feedback.' },
];

export default function WorkExperience() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.screen}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.headerRow}>
            <View style={styles.back}><Ionicons name="chevron-back" size={15} color={colors.textPrimary} /></View>
            <View style={{ flex: 1 }}><Text style={styles.title}>Work Experience</Text><Text style={styles.meta}>2 ENTRIES RECORDED</Text></View>
            <TouchableOpacity><Ionicons name="ellipsis-horizontal" size={18} color={colors.textMuted} /></TouchableOpacity>
          </View>

          {jobs.map((job, i) => <JobCard key={i} job={job} />)}

          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={14} color={colors.accentBlue} />
            <Text style={styles.addText}>Add New Experience</Text>
          </TouchableOpacity>
        </ScrollView>
        <BottomTabBar activeTab="home" />
      </View>
    </SafeAreaView>
  );
}

const JobCard = ({ job }) => (
  <View style={styles.card}>
    <View style={styles.jobHeader}>
      <View style={{ flex: 1 }}>
        <Text style={styles.role}>{job.role}</Text>
        <Text style={styles.company}>{job.company}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity><Ionicons name="pencil" size={12} color="#FF5A5F" /></TouchableOpacity>
        <TouchableOpacity><Ionicons name="trash-outline" size={13} color="#FF5A5F" /></TouchableOpacity>
      </View>
    </View>
    <Text style={styles.period}>{job.period}</Text>
    <Text style={styles.place}>{job.place}</Text>
    <Text style={styles.desc}>{job.desc}</Text>
  </View>
);

const styles = StyleSheet.create({
  safe:{flex:1,backgroundColor:'#F8FAFD'},screen:{flex:1},content:{paddingHorizontal:18,paddingTop:10,paddingBottom:24},
  headerRow:{flexDirection:'row',alignItems:'center',marginBottom:12},back:{width:26,height:26,borderRadius:13,backgroundColor:'#fff',alignItems:'center',justifyContent:'center',marginRight:8},
  title:{fontSize:16,fontWeight:'800',color:colors.textPrimary},meta:{fontSize:8,fontWeight:'700',color:colors.accentBlue,marginTop:2},
  card:{backgroundColor:'#fff',borderWidth:1,borderColor:'#E2E8F0',borderRadius:8,padding:10,marginBottom:8},jobHeader:{flexDirection:'row',alignItems:'flex-start'},role:{fontSize:9,fontWeight:'800',color:colors.textPrimary},company:{fontSize:8,color:colors.accentBlue,fontWeight:'600',marginTop:2},actions:{flexDirection:'row',gap:9},period:{fontSize:7,color:colors.textPrimary,marginTop:7,fontWeight:'600'},place:{fontSize:7,color:colors.textMuted,marginTop:2},desc:{fontSize:7,color:colors.textSecondary,lineHeight:11,marginTop:6},
  addButton:{height:35,borderWidth:1,borderStyle:'dashed',borderColor:'#76A9F4',borderRadius:8,alignItems:'center',justifyContent:'center',flexDirection:'row',marginTop:1},addText:{fontSize:8,fontWeight:'700',color:colors.accentBlue,marginLeft:4},
});
