import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors, spacing, radius } from '../theme/colors';
import BottomTabBar from '../components/BottomTabBar';

const Resume = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.screen}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>My Resumes</Text>
              <Text style={styles.meta}>2 FILES UPLOADED</Text>
            </View>
            <Ionicons name="chevron-back" size={18} color={colors.textPrimary} style={{ opacity: 0 }} />
          </View>

          <View style={styles.resumeFile}>
            <View style={styles.fileIcon}><Ionicons name="document-text" size={18} color={colors.accentBlue} /></View>
            <View style={styles.fileInfo}>
              <Text style={styles.fileName}>SWE 2 – Resume.pdf</Text>
              <Text style={styles.fileMeta}>2.4 MB · Updated 2d ago</Text>
            </View>
            <TouchableOpacity style={styles.viewBtn}><Text style={styles.viewText}>View</Text></TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.uploadBox}>
            <Ionicons name="cloud-upload-outline" size={20} color={colors.accentBlue} />
            <Text style={styles.uploadTitle}>Upload a new version</Text>
            <Text style={styles.uploadMeta}>PDF, DOCX up to 10MB</Text>
          </TouchableOpacity>

          <Text style={styles.sectionLabel}>Resume Details</Text>
          <Field label="Resume Title" value="SWE Internship Resume · Fall 2025" />
          <Field label="Target Role / Tagline" value="Junior Software Engineer" />
          <Field label="Primary Industry" value="Technology & Software Development" />

          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Save Resume Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.outlineButton} onPress={() => router.push('/resume-analyzer')}>
            <Ionicons name="analytics-outline" size={17} color={colors.navy} />
            <Text style={styles.outlineButtonText}>Resume Analyzer</Text>
          </TouchableOpacity>
        </ScrollView>
        <BottomTabBar activeTab="resume" />
      </View>
    </SafeAreaView>
  );
};

const Field = ({ label, value }) => (
  <View style={styles.fieldWrap}>
    <Text style={styles.fieldLabel}>{label}</Text>
    <View style={styles.field}><Text style={styles.fieldText}>{value}</Text></View>
  </View>
);

export default Resume;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F8FAFD' },
  screen: { flex: 1 },
  content: { paddingHorizontal: 18, paddingTop: 10, paddingBottom: 24 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  title: { fontSize: 16, fontWeight: '800', color: colors.textPrimary },
  meta: { fontSize: 8, fontWeight: '700', color: colors.accentBlue, marginTop: 2, letterSpacing: .3 },
  resumeFile: { backgroundColor: colors.white, borderWidth: 1, borderColor: '#E6EBF2', borderRadius: 9, padding: 9, flexDirection: 'row', alignItems: 'center' },
  fileIcon: { width: 30, height: 34, borderRadius: 5, backgroundColor: colors.lightBlueTint, alignItems: 'center', justifyContent: 'center' },
  fileInfo: { flex: 1, marginLeft: 8 },
  fileName: { fontSize: 9, fontWeight: '700', color: colors.textPrimary },
  fileMeta: { fontSize: 7, color: colors.textMuted, marginTop: 3 },
  viewBtn: { borderWidth: 1, borderColor: '#DDE5F0', borderRadius: 5, paddingHorizontal: 8, paddingVertical: 4 },
  viewText: { fontSize: 7, fontWeight: '700', color: colors.accentBlue },
  uploadBox: { marginTop: 8, borderWidth: 1, borderColor: '#76A9F4', borderStyle: 'dashed', borderRadius: 9, paddingVertical: 18, alignItems: 'center', backgroundColor: '#FBFDFF' },
  uploadTitle: { fontSize: 8, fontWeight: '700', color: colors.textPrimary, marginTop: 5 },
  uploadMeta: { fontSize: 7, color: colors.textMuted, marginTop: 3 },
  sectionLabel: { fontSize: 9, fontWeight: '800', color: colors.textPrimary, marginTop: 14, marginBottom: 7 },
  fieldWrap: { marginBottom: 8 },
  fieldLabel: { fontSize: 7, color: colors.textSecondary, marginBottom: 4 },
  field: { minHeight: 34, backgroundColor: colors.white, borderWidth: 1, borderColor: '#E1E7EF', borderRadius: 6, justifyContent: 'center', paddingHorizontal: 9 },
  fieldText: { fontSize: 8, color: colors.textPrimary },
  primaryButton: { height: 36, backgroundColor: colors.navy, borderRadius: 7, alignItems: 'center', justifyContent: 'center', marginTop: 5 },
  primaryButtonText: { color: colors.white, fontSize: 9, fontWeight: '800' },
  outlineButton: { height: 36, borderWidth: 1, borderColor: colors.navy, borderRadius: 7, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 7 },
  outlineButtonText: { color: colors.navy, fontSize: 9, fontWeight: '800', marginLeft: 5 },
});
