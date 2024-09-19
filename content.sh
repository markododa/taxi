export IFS=,
while read ime broj _; do
if [ $ime == "ime" ]; then
	continue
fi
sed -i "/header.png/a \<div class="button"><a href=\"tel://$broj\">$ime</a></div>" $2
done <<< $(tac $1)
