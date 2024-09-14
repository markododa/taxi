export IFS=,
while read ime broj _; do
if [ $ime == "ime" ]; then
	continue
fi
sed -i "/Таксиња/a \<div><a href=\"tel://$broj\">$ime 📞</a></div><hr>" $2
done <<< $(tac $1)
