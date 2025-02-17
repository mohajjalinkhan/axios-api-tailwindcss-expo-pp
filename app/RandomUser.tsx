import { Text, View, FlatList, Image, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
const RandomUser = () => {
  //for data
  const [user, setUser] = useState([]);
  // for loading state
  const [loading, setLoading] = useState(true);
  // for error
  const [error, setError] = useState(null);
  // Fetching API
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=20"
        );
        setUser(response.data.results);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error! {error}</Text>;

  return (
    <SafeAreaView>
      <View className="my-5">
        <Text className="text-4xl font-bold uppercase text-center">
          User Profile
        </Text>
      </View>
      <FlatList
        data={user}
        keyExtractor={(item) => item.login.uuid}
        renderItem={({ item }) => (
          <View
            className="w-96 h-32 flex flex-row items-center 
        bg-blue-100 rounded-2xl p-2 my-2 shadow-sm"
          >
            <Image
              source={{ uri: item.picture.thumbnail }}
              className="w-14 h-14 rounded-full mx-3"
            />
            <View className="flex flex-col ml-2">
              <Text className="text-gray-900 text-xl">
                First Name {item.name.first}
              </Text>
              <Text className="text-gray-900  text-xl">
                Last Name {item.name.last}
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default RandomUser;
