const useAuth = () => {
  const setAuthModal = useSetAtom(authModalAtom);
  const [logOutLoading, setLogOutLoading] = useState(false);

  const {
    data: currentUser = null,
    refetch,
    isLoading: isLoadingMe,
  } = useQuery({
    queryKey: ["getMeApiLocal"],
    queryFn: () =>
      getMeApiLocal()
        .then((res) => res.data)
        .catch(() => {
          return null;
        }),
    retry: 0,
  });
};
