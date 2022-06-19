// Медиа запросы

export const useMediaQuery = (width = 768) => {
	const [toggleChange, setToggleChange] = useState(false);
	const matchMediaRef = useRef(null);

	useEffect(() => {
		matchMediaRef.current = window.matchMedia(`(min-width: ${width}px)`);

		const initialMatch = matchMediaRef.current.matches;

		if (initialMatch) {
			setToggleChange(true);
		} else {
			setToggleChange(false);
		}

		const test = (event) => {
			if (event.matches) {
				setToggleChange(true);
			} else {
				setToggleChange(false);
			}
		};

		matchMediaRef.current.addListener(test);
		return () => {
			matchMediaRef.current.removeListener(test);
		};
	}, [width]);

	return toggleChange;
};
