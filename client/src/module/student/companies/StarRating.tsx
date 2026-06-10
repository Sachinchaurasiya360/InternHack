
i
m
p
o
r
t
 
{
 
S
t
a
r
 
}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
B
u
t
t
o
n
 
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
u
i
/
b
u
t
t
o
n
"
;




i
n
t
e
r
f
a
c
e
 
S
t
a
r
R
a
t
i
n
g
P
r
o
p
s
 
{


 
 
r
a
t
i
n
g
:
 
n
u
m
b
e
r
;


 
 
o
n
R
a
t
e
?
:
 
(
r
a
t
i
n
g
:
 
n
u
m
b
e
r
)
 
=
>
 
v
o
i
d
;


 
 
s
i
z
e
?
:
 
"
s
m
"
 
|
 
"
m
d
"
 
|
 
"
l
g
"
;


}




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
a
r
R
a
t
i
n
g
(
{
 
r
a
t
i
n
g
,
 
o
n
R
a
t
e
,
 
s
i
z
e
 
=
 
"
m
d
"
 
}
:
 
S
t
a
r
R
a
t
i
n
g
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
s
i
z
e
C
l
a
s
s
 
=
 
s
i
z
e
 
=
=
=
 
"
s
m
"
 
?
 
"
w
-
4
 
h
-
4
"
 
:
 
s
i
z
e
 
=
=
=
 
"
l
g
"
 
?
 
"
w
-
6
 
h
-
6
"
 
:
 
"
w
-
5
 
h
-
5
"
;




 
 
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
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
0
.
5
"
>


 
 
 
 
 
 
{
[
1
,
 
2
,
 
3
,
 
4
,
 
5
]
.
m
a
p
(
(
s
t
a
r
)
 
=
>
 
(


 
 
 
 
 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
t
a
r
}


 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
o
n
R
a
t
e
?
.
(
s
t
a
r
)
}


 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
!
o
n
R
a
t
e
}


 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
g
h
o
s
t
"


 
 
 
 
 
 
 
 
 
 
m
o
d
e
=
"
i
c
o
n
"


 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
"
s
m
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
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
h
o
v
e
r
:
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
h
-
a
u
t
o
 
w
-
a
u
t
o
 
p
-
0
 
$
{
o
n
R
a
t
e
 
?
 
"
h
o
v
e
r
:
s
c
a
l
e
-
1
1
0
"
 
:
 
"
c
u
r
s
o
r
-
d
e
f
a
u
l
t
"
}
 
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
t
r
a
n
s
f
o
r
m
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
1
0
0
`
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
r


 
 
 
 
 
 
 
 
 
 
 
 
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
$
{
s
i
z
e
C
l
a
s
s
}
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
a
r
 
<
=
 
r
a
t
i
n
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
t
e
x
t
-
y
e
l
l
o
w
-
4
0
0
 
f
i
l
l
-
y
e
l
l
o
w
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
t
e
x
t
-
g
r
a
y
-
3
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
6
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
)
)
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


