
i
m
p
o
r
t
 
{
 
O
u
t
l
e
t
 
}
 
f
r
o
m
 
"
r
e
a
c
t
-
r
o
u
t
e
r
"
;


i
m
p
o
r
t
 
{
 
u
s
e
L
a
y
o
u
t
S
t
o
r
e
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
l
i
b
/
l
a
y
o
u
t
.
s
t
o
r
e
"
;


i
m
p
o
r
t
 
{
 
u
s
e
S
t
u
d
e
n
t
S
i
d
e
b
a
r
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
S
t
u
d
e
n
t
S
i
d
e
b
a
r
"
;


i
m
p
o
r
t
 
{
 
N
a
v
b
a
r
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
N
a
v
b
a
r
"
;


i
m
p
o
r
t
 
{
 
S
E
O
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
S
E
O
"
;




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
S
t
u
d
e
n
t
L
a
y
o
u
t
(
)
 
{


 
 
c
o
n
s
t
 
i
m
m
e
r
s
i
v
e
 
=
 
u
s
e
L
a
y
o
u
t
S
t
o
r
e
(
(
s
)
 
=
>
 
s
.
i
m
m
e
r
s
i
v
e
)
;


 
 
c
o
n
s
t
 
{
 
c
o
l
l
a
p
s
e
d
,
 
s
i
d
e
b
a
r
W
i
d
t
h
,
 
s
i
d
e
b
a
r
 
}
 
=
 
u
s
e
S
t
u
d
e
n
t
S
i
d
e
b
a
r
(
)
;




 
 
i
f
 
(
i
m
m
e
r
s
i
v
e
)
 
{


 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
i
n
-
h
-
s
c
r
e
e
n
 
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
"
>


 
 
 
 
 
 
 
 
<
m
a
i
n
 
c
l
a
s
s
N
a
m
e
=
"
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
<
O
u
t
l
e
t
 
/
>


 
 
 
 
 
 
 
 
<
/
m
a
i
n
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
)
;


 
 
}




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
i
n
-
h
-
s
c
r
e
e
n
 
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
"
>


 
 
 
 
 
 
<
S
E
O
 
t
i
t
l
e
=
"
S
t
u
d
e
n
t
 
D
a
s
h
b
o
a
r
d
"
 
n
o
I
n
d
e
x
 
/
>


 
 
 
 
 
 
{
/
*
 
N
a
v
b
a
r
 
h
i
d
d
e
n
 
o
n
 
m
o
b
i
l
e
 
(
m
o
b
i
l
e
 
t
o
p
 
b
a
r
 
i
s
 
i
n
 
S
t
u
d
e
n
t
S
i
d
e
b
a
r
)
 
*
/
}


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
h
i
d
d
e
n
 
l
g
:
b
l
o
c
k
"
>


 
 
 
 
 
 
 
 
<
N
a
v
b
a
r
 
s
i
d
e
b
a
r
O
f
f
s
e
t
=
{
s
i
d
e
b
a
r
W
i
d
t
h
}
 
/
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
{
s
i
d
e
b
a
r
}


 
 
 
 
 
 
<
m
a
i
n


 
 
 
 
 
 
 
 
a
r
i
a
-
l
a
b
e
l
=
"
S
t
u
d
e
n
t
 
m
a
i
n
 
c
o
n
t
e
n
t
"


 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
p
t
-
1
6
 
l
g
:
p
t
-
2
4
 
p
x
-
4
 
p
b
-
8
 
s
m
:
p
x
-
6
 
l
g
:
p
x
-
8
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
 
d
u
r
a
t
i
o
n
-
3
0
0
 
o
v
e
r
f
l
o
w
-
a
u
t
o
 
$
{


 
 
 
 
 
 
 
 
 
 
c
o
l
l
a
p
s
e
d
 
?
 
"
l
g
:
m
l
-
1
8
"
 
:
 
"
l
g
:
m
l
-
6
4
"


 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
O
u
t
l
e
t
 
/
>


 
 
 
 
 
 
<
/
m
a
i
n
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


