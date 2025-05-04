import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigation } from '@/navigators/RootNavigator';

export default function Header() {
    const { navigate } = useNavigation<StackNavigation>();

    return (
        <TouchableOpacity
            style={{
                height: 50,
                gap: 16,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'red',
                paddingHorizontal: 10,
            }}
            onPress={() => navigate('Profile')}
        >
            <Text>Header</Text>
        </TouchableOpacity>
    );
}
