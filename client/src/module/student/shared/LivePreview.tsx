
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
a
t
e
,
 
u
s
e
E
f
f
e
c
t
,
 
u
s
e
R
e
f
,
 
m
e
m
o
 
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
 
L
i
v
e
P
r
e
v
i
e
w
P
r
o
p
s
 
{


 
 
h
t
m
l
:
 
s
t
r
i
n
g
;


 
 
c
s
s
?
:
 
s
t
r
i
n
g
;


 
 
h
e
i
g
h
t
?
:
 
s
t
r
i
n
g
;


}




f
u
n
c
t
i
o
n
 
L
i
v
e
P
r
e
v
i
e
w
I
n
n
e
r
(
{
 
h
t
m
l
,
 
c
s
s
,
 
h
e
i
g
h
t
 
=
 
"
2
0
0
p
x
"
 
}
:
 
L
i
v
e
P
r
e
v
i
e
w
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
 
i
f
r
a
m
e
R
e
f
 
=
 
u
s
e
R
e
f
<
H
T
M
L
I
F
r
a
m
e
E
l
e
m
e
n
t
>
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
[
s
r
c
d
o
c
,
 
s
e
t
S
r
c
d
o
c
]
 
=
 
u
s
e
S
t
a
t
e
(
"
"
)
;




 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
t
i
m
e
r
 
=
 
s
e
t
T
i
m
e
o
u
t
(
(
)
 
=
>
 
{


 
 
 
 
 
 
c
o
n
s
t
 
d
o
c
 
=
 
`
<
!
D
O
C
T
Y
P
E
 
h
t
m
l
>
<
h
t
m
l
>
<
h
e
a
d
>
<
m
e
t
a
 
c
h
a
r
s
e
t
=
"
u
t
f
-
8
"
>
<
m
e
t
a
 
n
a
m
e
=
"
v
i
e
w
p
o
r
t
"
 
c
o
n
t
e
n
t
=
"
w
i
d
t
h
=
d
e
v
i
c
e
-
w
i
d
t
h
,
i
n
i
t
i
a
l
-
s
c
a
l
e
=
1
"
>
<
s
t
y
l
e
>
b
o
d
y
{
m
a
r
g
i
n
:
1
2
p
x
;
f
o
n
t
-
f
a
m
i
l
y
:
s
y
s
t
e
m
-
u
i
,
-
a
p
p
l
e
-
s
y
s
t
e
m
,
s
a
n
s
-
s
e
r
i
f
;
f
o
n
t
-
s
i
z
e
:
1
4
p
x
;
c
o
l
o
r
:
#
1
a
1
a
1
a
}
*
{
b
o
x
-
s
i
z
i
n
g
:
b
o
r
d
e
r
-
b
o
x
}
$
{
c
s
s
 
?
?
 
"
"
}
<
/
s
t
y
l
e
>
<
/
h
e
a
d
>
<
b
o
d
y
>
$
{
h
t
m
l
}
<
/
b
o
d
y
>
<
/
h
t
m
l
>
`
;


 
 
 
 
 
 
s
e
t
S
r
c
d
o
c
(
d
o
c
)
;


 
 
 
 
}
,
 
3
0
0
)
;


 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
c
l
e
a
r
T
i
m
e
o
u
t
(
t
i
m
e
r
)
;


 
 
}
,
 
[
h
t
m
l
,
 
c
s
s
]
)
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
r
o
u
n
d
e
d
-
x
l
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
7
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
h
i
d
d
e
n
 
b
g
-
w
h
i
t
e
"
>


 
 
 
 
 
 
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
p
x
-
4
 
p
y
-
2
 
b
g
-
g
r
a
y
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
g
r
a
y
-
8
0
0
 
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
"
>


 
 
 
 
 
 
 
 
<
s
p
a
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
r
 
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
5
0
0
"
>
P
r
e
v
i
e
w
<
/
s
p
a
n
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
i
f
r
a
m
e


 
 
 
 
 
 
 
 
r
e
f
=
{
i
f
r
a
m
e
R
e
f
}


 
 
 
 
 
 
 
 
s
r
c
D
o
c
=
{
s
r
c
d
o
c
}


 
 
 
 
 
 
 
 
s
a
n
d
b
o
x
=
"
a
l
l
o
w
-
s
c
r
i
p
t
s
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
"
w
-
f
u
l
l
 
b
o
r
d
e
r
-
0
 
b
g
-
w
h
i
t
e
"


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
h
e
i
g
h
t
 
}
}


 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
L
i
v
e
 
P
r
e
v
i
e
w
"


 
 
 
 
 
 
/
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




e
x
p
o
r
t
 
c
o
n
s
t
 
L
i
v
e
P
r
e
v
i
e
w
 
=
 
m
e
m
o
(
L
i
v
e
P
r
e
v
i
e
w
I
n
n
e
r
)
;


