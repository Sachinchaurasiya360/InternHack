
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
M
e
m
o
,
 
u
s
e
S
t
a
t
e
 
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
m
p
o
r
t
 
{
 
B
o
o
k
O
p
e
n
,
 
C
o
d
e
2
,
 
L
i
g
h
t
b
u
l
b
,
 
P
l
a
y
,
 
T
a
r
g
e
t
 
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


 
 
L
e
s
s
o
n
S
h
e
l
l
,


 
 
t
y
p
e
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
,


 
 
t
y
p
e
 
L
e
s
s
o
n
T
a
b
D
e
f
,


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
d
s
a
-
t
h
e
o
r
y
/
L
e
s
s
o
n
S
h
e
l
l
"
;


i
m
p
o
r
t
 
{


 
 
A
l
g
o
C
a
n
v
a
s
,


 
 
I
n
p
u
t
E
d
i
t
o
r
,


 
 
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
,


 
 
u
s
e
S
t
e
p
P
l
a
y
e
r
,


 
 
V
a
r
i
a
b
l
e
s
P
a
n
e
l
,


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
d
s
a
-
t
h
e
o
r
y
/
a
l
g
o
"
;


i
m
p
o
r
t
 
{


 
 
C
a
l
l
o
u
t
,


 
 
C
a
r
d
,


 
 
L
e
d
e
,


 
 
P
i
l
l
B
u
t
t
o
n
,


 
 
S
e
c
t
i
o
n
E
y
e
b
r
o
w
,


 
 
S
e
c
t
i
o
n
T
i
t
l
e
,


 
 
S
u
b
H
e
a
d
i
n
g
,


 
 
T
H
E
M
E
,


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
d
s
a
-
t
h
e
o
r
y
/
p
r
i
m
i
t
i
v
e
s
"
;


i
m
p
o
r
t
 
{
 
P
r
a
c
t
i
c
e
T
a
b
 
}
 
f
r
o
m
 
"
.
.
/
P
r
a
c
t
i
c
e
T
a
b
"
;




c
o
n
s
t
 
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
 
=
 
"
g
r
a
p
h
"
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
G
r
i
d
 
t
y
p
e
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




t
y
p
e
 
C
e
l
l
K
i
n
d
 
=
 
"
e
m
p
t
y
"
 
|
 
"
w
a
l
l
"
 
|
 
"
s
o
u
r
c
e
"
 
|
 
"
t
a
r
g
e
t
"
;


t
y
p
e
 
P
a
i
n
t
T
o
o
l
 
=
 
"
w
a
l
l
"
 
|
 
"
s
o
u
r
c
e
"
 
|
 
"
t
a
r
g
e
t
"
 
|
 
"
e
m
p
t
y
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
 
F
r
a
m
e
 
{


 
 
l
i
n
e
:
 
n
u
m
b
e
r
;


 
 
v
a
r
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
s
t
r
i
n
g
 
|
 
n
u
m
b
e
r
 
|
 
u
n
d
e
f
i
n
e
d
>
;


 
 
m
e
s
s
a
g
e
:
 
s
t
r
i
n
g
;


 
 
d
i
s
t
:
 
(
n
u
m
b
e
r
 
|
 
n
u
l
l
)
[
]
[
]
;


 
 
f
r
o
n
t
i
e
r
:
 
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
[
]
;


 
 
c
u
r
r
e
n
t
:
 
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
 
|
 
n
u
l
l
;


 
 
p
a
t
h
:
 
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
[
]
 
|
 
n
u
l
l
;


 
 
f
l
a
s
h
K
e
y
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




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
P
s
e
u
d
o
c
o
d
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




c
o
n
s
t
 
P
S
E
U
D
O
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
b
f
s
(
g
r
i
d
,
 
s
r
c
)
:
"
,


 
 
"
 
 
q
u
e
u
e
 
=
 
[
s
r
c
]
;
 
d
i
s
t
[
s
r
c
]
 
=
 
0
"
,


 
 
"
 
 
w
h
i
l
e
 
q
u
e
u
e
 
n
o
t
 
e
m
p
t
y
:
"
,


 
 
"
 
 
 
 
(
r
,
 
c
)
 
=
 
q
u
e
u
e
.
p
o
p
F
r
o
n
t
(
)
"
,


 
 
"
 
 
 
 
f
o
r
 
e
a
c
h
 
n
e
i
g
h
b
o
r
 
(
n
r
,
 
n
c
)
:
"
,


 
 
"
 
 
 
 
 
 
i
f
 
i
n
-
b
o
u
n
d
s
 
a
n
d
 
n
o
t
 
w
a
l
l
 
a
n
d
 
d
i
s
t
[
n
r
]
[
n
c
]
 
=
=
 
n
u
l
l
:
"
,


 
 
"
 
 
 
 
 
 
 
 
d
i
s
t
[
n
r
]
[
n
c
]
 
=
 
d
i
s
t
[
r
]
[
c
]
 
+
 
1
"
,


 
 
"
 
 
 
 
 
 
 
 
q
u
e
u
e
.
p
u
s
h
B
a
c
k
(
(
n
r
,
 
n
c
)
)
"
,


 
 
"
 
 
r
e
t
u
r
n
 
d
i
s
t
"
,


]
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
F
r
a
m
e
 
b
u
i
l
d
e
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
b
f
s
F
r
a
m
e
s
(


 
 
g
r
i
d
:
 
C
e
l
l
K
i
n
d
[
]
[
]
,


 
 
s
r
c
:
 
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
,


 
 
t
a
r
g
e
t
:
 
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
 
|
 
n
u
l
l
,


 
 
d
i
a
g
:
 
b
o
o
l
e
a
n
,


)
:
 
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
R
 
=
 
g
r
i
d
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
C
n
 
=
 
g
r
i
d
[
0
]
?
.
l
e
n
g
t
h
 
?
?
 
0
;


 
 
c
o
n
s
t
 
d
i
r
s
4
:
 
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
[
]
 
=
 
[
[
-
1
,
 
0
]
,
 
[
1
,
 
0
]
,
 
[
0
,
 
-
1
]
,
 
[
0
,
 
1
]
]
;


 
 
c
o
n
s
t
 
d
i
r
s
8
:
 
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
[
]
 
=
 
[
.
.
.
d
i
r
s
4
,
 
[
-
1
,
 
-
1
]
,
 
[
-
1
,
 
1
]
,
 
[
1
,
 
-
1
]
,
 
[
1
,
 
1
]
]
;


 
 
c
o
n
s
t
 
d
i
r
s
 
=
 
d
i
a
g
 
?
 
d
i
r
s
8
 
:
 
d
i
r
s
4
;


 
 
c
o
n
s
t
 
f
:
 
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
d
i
s
t
:
 
(
n
u
m
b
e
r
 
|
 
n
u
l
l
)
[
]
[
]
 
=
 
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
R
 
}
,
 
(
)
 
=
>
 
A
r
r
a
y
(
C
n
)
.
f
i
l
l
(
n
u
l
l
)
)
;


 
 
c
o
n
s
t
 
p
a
r
e
n
t
:
 
(
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
 
|
 
n
u
l
l
)
[
]
[
]
 
=
 
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
R
 
}
,
 
(
)
 
=
>
 
A
r
r
a
y
(
C
n
)
.
f
i
l
l
(
n
u
l
l
)
)
;


 
 
d
i
s
t
[
s
r
c
[
0
]
]
[
s
r
c
[
1
]
]
 
=
 
0
;


 
 
c
o
n
s
t
 
q
:
 
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
[
]
 
=
 
[
[
.
.
.
s
r
c
]
 
a
s
 
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
]
;




 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
 
s
r
c
:
 
`
(
$
{
s
r
c
[
0
]
}
,
$
{
s
r
c
[
1
]
}
)
`
,
 
R
,
 
C
:
 
C
n
,
 
d
i
a
g
:
 
d
i
a
g
 
?
 
"
8
-
d
i
r
"
 
:
 
"
4
-
d
i
r
"
 
}
,
 
m
e
s
s
a
g
e
:
 
`
B
F
S
 
f
r
o
m
 
s
o
u
r
c
e
 
(
$
{
s
r
c
[
0
]
}
,
$
{
s
r
c
[
1
]
}
)
.
 
$
{
d
i
a
g
 
?
 
"
E
i
g
h
t
"
 
:
 
"
F
o
u
r
"
}
-
d
i
r
e
c
t
i
o
n
a
l
 
m
o
v
e
s
.
`
,
 
d
i
s
t
:
 
d
i
s
t
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
,
 
f
r
o
n
t
i
e
r
:
 
[
.
.
.
q
]
,
 
c
u
r
r
e
n
t
:
 
n
u
l
l
,
 
p
a
t
h
:
 
n
u
l
l
 
}
)
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
1
,
 
v
a
r
s
:
 
{
 
"
q
u
e
u
e
.
s
i
z
e
"
:
 
q
.
l
e
n
g
t
h
,
 
"
d
i
s
t
[
s
r
c
]
"
:
 
0
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
q
u
e
u
e
.
s
i
z
e
"
,
 
m
e
s
s
a
g
e
:
 
"
E
n
q
u
e
u
e
 
s
o
u
r
c
e
;
 
i
t
s
 
d
i
s
t
a
n
c
e
 
i
s
 
0
.
"
,
 
d
i
s
t
:
 
d
i
s
t
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
,
 
f
r
o
n
t
i
e
r
:
 
[
.
.
.
q
]
,
 
c
u
r
r
e
n
t
:
 
n
u
l
l
,
 
p
a
t
h
:
 
n
u
l
l
 
}
)
;




 
 
w
h
i
l
e
 
(
q
.
l
e
n
g
t
h
)
 
{


 
 
 
 
c
o
n
s
t
 
c
u
r
 
=
 
q
.
s
h
i
f
t
(
)
!
;


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
3
,
 
v
a
r
s
:
 
{
 
r
:
 
c
u
r
[
0
]
,
 
c
:
 
c
u
r
[
1
]
,
 
d
:
 
d
i
s
t
[
c
u
r
[
0
]
]
[
c
u
r
[
1
]
]
 
?
?
 
"
-
"
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
d
"
,
 
m
e
s
s
a
g
e
:
 
`
D
e
q
u
e
u
e
 
(
$
{
c
u
r
[
0
]
}
,
$
{
c
u
r
[
1
]
}
)
,
 
d
i
s
t
a
n
c
e
 
$
{
d
i
s
t
[
c
u
r
[
0
]
]
[
c
u
r
[
1
]
]
}
.
`
,
 
d
i
s
t
:
 
d
i
s
t
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
,
 
f
r
o
n
t
i
e
r
:
 
[
.
.
.
q
]
,
 
c
u
r
r
e
n
t
:
 
c
u
r
,
 
p
a
t
h
:
 
n
u
l
l
 
}
)
;


 
 
 
 
i
f
 
(
t
a
r
g
e
t
 
&
&
 
c
u
r
[
0
]
 
=
=
=
 
t
a
r
g
e
t
[
0
]
 
&
&
 
c
u
r
[
1
]
 
=
=
=
 
t
a
r
g
e
t
[
1
]
)
 
b
r
e
a
k
;


 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
[
d
r
,
 
d
c
]
 
o
f
 
d
i
r
s
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
n
r
 
=
 
c
u
r
[
0
]
 
+
 
d
r
;
 
c
o
n
s
t
 
n
c
 
=
 
c
u
r
[
1
]
 
+
 
d
c
;


 
 
 
 
 
 
i
f
 
(
n
r
 
<
 
0
 
|
|
 
n
r
 
>
=
 
R
 
|
|
 
n
c
 
<
 
0
 
|
|
 
n
c
 
>
=
 
C
n
)
 
c
o
n
t
i
n
u
e
;


 
 
 
 
 
 
i
f
 
(
g
r
i
d
[
n
r
]
[
n
c
]
 
=
=
=
 
"
w
a
l
l
"
)
 
c
o
n
t
i
n
u
e
;


 
 
 
 
 
 
i
f
 
(
d
i
s
t
[
n
r
]
[
n
c
]
 
!
=
=
 
n
u
l
l
)
 
c
o
n
t
i
n
u
e
;


 
 
 
 
 
 
d
i
s
t
[
n
r
]
[
n
c
]
 
=
 
(
d
i
s
t
[
c
u
r
[
0
]
]
[
c
u
r
[
1
]
]
 
?
?
 
0
)
 
+
 
1
;


 
 
 
 
 
 
p
a
r
e
n
t
[
n
r
]
[
n
c
]
 
=
 
c
u
r
;


 
 
 
 
 
 
q
.
p
u
s
h
(
[
n
r
,
 
n
c
]
)
;


 
 
 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
6
,
 
v
a
r
s
:
 
{
 
n
r
,
 
n
c
,
 
"
d
i
s
t
[
n
r
]
[
n
c
]
"
:
 
d
i
s
t
[
n
r
]
[
n
c
]
 
?
?
 
"
-
"
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
d
i
s
t
[
n
r
]
[
n
c
]
"
,
 
m
e
s
s
a
g
e
:
 
`
V
i
s
i
t
 
(
$
{
n
r
}
,
$
{
n
c
}
)
,
 
d
i
s
t
a
n
c
e
 
$
{
d
i
s
t
[
n
r
]
[
n
c
]
}
.
 
E
n
q
u
e
u
e
.
`
,
 
d
i
s
t
:
 
d
i
s
t
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
,
 
f
r
o
n
t
i
e
r
:
 
[
.
.
.
q
]
,
 
c
u
r
r
e
n
t
:
 
c
u
r
,
 
p
a
t
h
:
 
n
u
l
l
 
}
)
;


 
 
 
 
}


 
 
}




 
 
l
e
t
 
p
a
t
h
:
 
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
[
]
 
|
 
n
u
l
l
 
=
 
n
u
l
l
;


 
 
i
f
 
(
t
a
r
g
e
t
 
&
&
 
d
i
s
t
[
t
a
r
g
e
t
[
0
]
]
[
t
a
r
g
e
t
[
1
]
]
 
!
=
=
 
n
u
l
l
)
 
{


 
 
 
 
p
a
t
h
 
=
 
[
]
;


 
 
 
 
l
e
t
 
c
:
 
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
 
|
 
n
u
l
l
 
=
 
t
a
r
g
e
t
;


 
 
 
 
w
h
i
l
e
 
(
c
)
 
{
 
p
a
t
h
.
p
u
s
h
(
c
)
;
 
c
 
=
 
p
a
r
e
n
t
[
c
[
0
]
]
[
c
[
1
]
]
;
 
}


 
 
 
 
p
a
t
h
.
r
e
v
e
r
s
e
(
)
;


 
 
}


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
8
,
 
v
a
r
s
:
 
{
 
d
o
n
e
:
 
"
t
r
u
e
"
,
 
r
e
a
c
h
e
d
:
 
t
a
r
g
e
t
 
?
 
(
d
i
s
t
[
t
a
r
g
e
t
[
0
]
]
[
t
a
r
g
e
t
[
1
]
]
 
?
?
 
"
u
n
r
e
a
c
h
a
b
l
e
"
)
 
:
 
"
-
"
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
d
o
n
e
"
,
 
m
e
s
s
a
g
e
:
 
t
a
r
g
e
t
 
?
 
(
d
i
s
t
[
t
a
r
g
e
t
[
0
]
]
[
t
a
r
g
e
t
[
1
]
]
 
!
=
=
 
n
u
l
l
 
?
 
`
R
e
a
c
h
e
d
 
t
a
r
g
e
t
 
i
n
 
$
{
d
i
s
t
[
t
a
r
g
e
t
[
0
]
]
[
t
a
r
g
e
t
[
1
]
]
}
 
s
t
e
p
s
.
`
 
:
 
"
T
a
r
g
e
t
 
u
n
r
e
a
c
h
a
b
l
e
.
"
)
 
:
 
`
F
i
l
l
e
d
 
$
{
d
i
s
t
.
f
l
a
t
(
)
.
f
i
l
t
e
r
(
(
x
)
 
=
>
 
x
 
!
=
=
 
n
u
l
l
)
.
l
e
n
g
t
h
}
 
c
e
l
l
s
.
`
,
 
d
i
s
t
:
 
d
i
s
t
.
m
a
p
(
(
r
)
 
=
>
 
[
.
.
.
r
]
)
,
 
f
r
o
n
t
i
e
r
:
 
[
]
,
 
c
u
r
r
e
n
t
:
 
n
u
l
l
,
 
p
a
t
h
 
}
)
;


 
 
r
e
t
u
r
n
 
f
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
G
r
i
d
 
p
a
r
s
i
n
g
 
h
e
l
p
e
r
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
p
a
r
s
e
G
r
i
d
(
s
:
 
s
t
r
i
n
g
)
:
 
{
 
g
r
i
d
:
 
C
e
l
l
K
i
n
d
[
]
[
]
;
 
s
r
c
:
 
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
 
|
 
n
u
l
l
;
 
t
g
t
:
 
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
 
|
 
n
u
l
l
 
}
 
|
 
n
u
l
l
 
{


 
 
c
o
n
s
t
 
l
i
n
e
s
 
=
 
s
.
s
p
l
i
t
(
"
\
n
"
)
.
m
a
p
(
(
l
)
 
=
>
 
l
.
t
r
i
m
(
)
)
.
f
i
l
t
e
r
(
B
o
o
l
e
a
n
)
;


 
 
i
f
 
(
!
l
i
n
e
s
.
l
e
n
g
t
h
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
c
o
n
s
t
 
R
 
=
 
l
i
n
e
s
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
C
n
 
=
 
M
a
t
h
.
m
a
x
(
.
.
.
l
i
n
e
s
.
m
a
p
(
(
l
)
 
=
>
 
l
.
l
e
n
g
t
h
)
)
;


 
 
i
f
 
(
C
n
 
=
=
=
 
0
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
c
o
n
s
t
 
g
r
i
d
:
 
C
e
l
l
K
i
n
d
[
]
[
]
 
=
 
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
R
 
}
,
 
(
)
 
=
>
 
A
r
r
a
y
(
C
n
)
.
f
i
l
l
(
"
e
m
p
t
y
"
 
a
s
 
C
e
l
l
K
i
n
d
)
)
;


 
 
l
e
t
 
s
r
c
:
 
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
 
|
 
n
u
l
l
 
=
 
n
u
l
l
;


 
 
l
e
t
 
t
g
t
:
 
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
 
|
 
n
u
l
l
 
=
 
n
u
l
l
;


 
 
f
o
r
 
(
l
e
t
 
r
 
=
 
0
;
 
r
 
<
 
R
;
 
r
+
+
)
 
{


 
 
 
 
f
o
r
 
(
l
e
t
 
c
 
=
 
0
;
 
c
 
<
 
C
n
;
 
c
+
+
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
c
h
 
=
 
l
i
n
e
s
[
r
]
[
c
]
 
?
?
 
"
.
"
;


 
 
 
 
 
 
i
f
 
(
c
h
 
=
=
=
 
"
#
"
)
 
g
r
i
d
[
r
]
[
c
]
 
=
 
"
w
a
l
l
"
;


 
 
 
 
 
 
e
l
s
e
 
i
f
 
(
c
h
 
=
=
=
 
"
S
"
)
 
{
 
g
r
i
d
[
r
]
[
c
]
 
=
 
"
s
o
u
r
c
e
"
;
 
s
r
c
 
=
 
[
r
,
 
c
]
;
 
}


 
 
 
 
 
 
e
l
s
e
 
i
f
 
(
c
h
 
=
=
=
 
"
T
"
)
 
{
 
g
r
i
d
[
r
]
[
c
]
 
=
 
"
t
a
r
g
e
t
"
;
 
t
g
t
 
=
 
[
r
,
 
c
]
;
 
}


 
 
 
 
 
 
e
l
s
e
 
g
r
i
d
[
r
]
[
c
]
 
=
 
"
e
m
p
t
y
"
;


 
 
 
 
}


 
 
}


 
 
r
e
t
u
r
n
 
{
 
g
r
i
d
,
 
s
r
c
,
 
t
g
t
 
}
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
 
g
r
i
d
T
o
S
t
r
i
n
g
(
g
r
i
d
:
 
C
e
l
l
K
i
n
d
[
]
[
]
)
:
 
s
t
r
i
n
g
 
{


 
 
r
e
t
u
r
n
 
g
r
i
d
.
m
a
p
(
(
r
o
w
)
 
=
>
 
r
o
w
.
m
a
p
(
(
c
)
 
=
>
 
c
 
=
=
=
 
"
w
a
l
l
"
 
?
 
"
#
"
 
:
 
c
 
=
=
=
 
"
s
o
u
r
c
e
"
 
?
 
"
S
"
 
:
 
c
 
=
=
=
 
"
t
a
r
g
e
t
"
 
?
 
"
T
"
 
:
 
"
.
"
)
.
j
o
i
n
(
"
"
)
)
.
j
o
i
n
(
"
\
n
"
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
G
r
i
d
V
i
z
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
L
e
g
e
n
d
S
w
a
t
c
h
(
{
 
c
o
l
o
r
,
 
l
a
b
e
l
 
}
:
 
{
 
c
o
l
o
r
:
 
s
t
r
i
n
g
;
 
l
a
b
e
l
:
 
s
t
r
i
n
g
 
}
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
i
n
l
i
n
e
-
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
1
 
t
e
x
t
-
[
1
1
p
x
]
 
t
e
x
t
-
s
t
o
n
e
-
5
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
w
-
3
 
h
-
3
 
r
o
u
n
d
e
d
 
i
n
l
i
n
e
-
b
l
o
c
k
"
 
s
t
y
l
e
=
{
{
 
b
a
c
k
g
r
o
u
n
d
:
 
c
o
l
o
r
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
0
,
0
,
0
,
0
.
1
)
"
 
}
}
 
/
>


 
 
 
 
 
 
{
l
a
b
e
l
}


 
 
 
 
<
/
s
p
a
n
>


 
 
)
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
 
G
r
i
d
V
i
z
(
{


 
 
g
r
i
d
,


 
 
f
r
a
m
e
,


 
 
o
n
C
e
l
l
C
l
i
c
k
,


}
:
 
{


 
 
g
r
i
d
:
 
C
e
l
l
K
i
n
d
[
]
[
]
;


 
 
f
r
a
m
e
:
 
F
r
a
m
e
;


 
 
o
n
C
e
l
l
C
l
i
c
k
:
 
(
r
:
 
n
u
m
b
e
r
,
 
c
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


}
)
 
{


 
 
c
o
n
s
t
 
C
n
 
=
 
g
r
i
d
[
0
]
?
.
l
e
n
g
t
h
 
?
?
 
0
;


 
 
c
o
n
s
t
 
m
a
x
D
 
=
 
M
a
t
h
.
m
a
x
(
0
,
 
.
.
.
f
r
a
m
e
.
d
i
s
t
.
f
l
a
t
(
)
.
f
i
l
t
e
r
(
(
x
)
:
 
x
 
i
s
 
n
u
m
b
e
r
 
=
>
 
x
 
!
=
=
 
n
u
l
l
)
)
;


 
 
c
o
n
s
t
 
f
r
o
n
t
i
e
r
S
e
t
 
=
 
n
e
w
 
S
e
t
(
f
r
a
m
e
.
f
r
o
n
t
i
e
r
.
m
a
p
(
(
[
r
,
 
c
]
)
 
=
>
 
`
$
{
r
}
,
$
{
c
}
`
)
)
;


 
 
c
o
n
s
t
 
p
a
t
h
S
e
t
 
=
 
n
e
w
 
S
e
t
(
(
f
r
a
m
e
.
p
a
t
h
 
?
?
 
[
]
)
.
m
a
p
(
(
[
r
,
 
c
]
)
 
=
>
 
`
$
{
r
}
,
$
{
c
}
`
)
)
;




 
 
f
u
n
c
t
i
o
n
 
c
e
l
l
S
t
y
l
e
(
r
:
 
n
u
m
b
e
r
,
 
c
:
 
n
u
m
b
e
r
)
:
 
{
 
b
g
:
 
s
t
r
i
n
g
;
 
f
g
:
 
s
t
r
i
n
g
;
 
b
o
r
d
e
r
:
 
s
t
r
i
n
g
 
}
 
{


 
 
 
 
c
o
n
s
t
 
k
i
n
d
 
=
 
g
r
i
d
[
r
]
[
c
]
;


 
 
 
 
c
o
n
s
t
 
d
 
=
 
f
r
a
m
e
.
d
i
s
t
[
r
]
[
c
]
;


 
 
 
 
i
f
 
(
k
i
n
d
 
=
=
=
 
"
w
a
l
l
"
)
 
r
e
t
u
r
n
 
{
 
b
g
:
 
"
#
3
3
4
1
5
5
"
,
 
f
g
:
 
"
#
f
f
f
"
,
 
b
o
r
d
e
r
:
 
"
#
1
e
2
9
3
b
"
 
}
;


 
 
 
 
i
f
 
(
k
i
n
d
 
=
=
=
 
"
s
o
u
r
c
e
"
)
 
r
e
t
u
r
n
 
{
 
b
g
:
 
T
H
E
M
E
.
s
u
c
c
e
s
s
,
 
f
g
:
 
"
#
f
f
f
"
,
 
b
o
r
d
e
r
:
 
T
H
E
M
E
.
s
u
c
c
e
s
s
 
}
;


 
 
 
 
i
f
 
(
k
i
n
d
 
=
=
=
 
"
t
a
r
g
e
t
"
)
 
r
e
t
u
r
n
 
{
 
b
g
:
 
T
H
E
M
E
.
d
a
n
g
e
r
,
 
f
g
:
 
"
#
f
f
f
"
,
 
b
o
r
d
e
r
:
 
T
H
E
M
E
.
d
a
n
g
e
r
 
}
;


 
 
 
 
i
f
 
(
p
a
t
h
S
e
t
.
h
a
s
(
`
$
{
r
}
,
$
{
c
}
`
)
)
 
r
e
t
u
r
n
 
{
 
b
g
:
 
"
#
f
b
b
f
2
4
"
,
 
f
g
:
 
"
#
7
8
3
5
0
f
"
,
 
b
o
r
d
e
r
:
 
"
#
b
4
5
3
0
9
"
 
}
;


 
 
 
 
i
f
 
(
f
r
a
m
e
.
c
u
r
r
e
n
t
 
&
&
 
f
r
a
m
e
.
c
u
r
r
e
n
t
[
0
]
 
=
=
=
 
r
 
&
&
 
f
r
a
m
e
.
c
u
r
r
e
n
t
[
1
]
 
=
=
=
 
c
)
 
r
e
t
u
r
n
 
{
 
b
g
:
 
"
#
3
b
8
2
f
6
"
,
 
f
g
:
 
"
#
f
f
f
"
,
 
b
o
r
d
e
r
:
 
"
#
1
d
4
e
d
8
"
 
}
;


 
 
 
 
i
f
 
(
f
r
o
n
t
i
e
r
S
e
t
.
h
a
s
(
`
$
{
r
}
,
$
{
c
}
`
)
)
 
r
e
t
u
r
n
 
{
 
b
g
:
 
"
#
0
6
b
6
d
4
"
,
 
f
g
:
 
"
#
f
f
f
"
,
 
b
o
r
d
e
r
:
 
"
#
0
e
7
4
9
0
"
 
}
;


 
 
 
 
i
f
 
(
d
 
!
=
=
 
n
u
l
l
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
r
a
t
i
o
 
=
 
m
a
x
D
 
=
=
=
 
0
 
?
 
0
 
:
 
d
 
/
 
m
a
x
D
;


 
 
 
 
 
 
c
o
n
s
t
 
a
l
p
h
a
 
=
 
0
.
1
8
 
+
 
0
.
5
5
 
*
 
(
1
 
-
 
r
a
t
i
o
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
{
 
b
g
:
 
`
r
g
b
a
(
1
3
9
,
9
2
,
2
4
6
,
$
{
a
l
p
h
a
.
t
o
F
i
x
e
d
(
2
)
}
)
`
,
 
f
g
:
 
"
#
3
c
1
a
9
4
"
,
 
b
o
r
d
e
r
:
 
"
r
g
b
a
(
1
3
9
,
9
2
,
2
4
6
,
0
.
4
)
"
 
}
;


 
 
 
 
}


 
 
 
 
r
e
t
u
r
n
 
{
 
b
g
:
 
T
H
E
M
E
.
b
g
,
 
f
g
:
 
T
H
E
M
E
.
t
e
x
t
M
u
t
e
d
,
 
b
o
r
d
e
r
:
 
T
H
E
M
E
.
b
o
r
d
e
r
 
}
;


 
 
}




 
 
c
o
n
s
t
 
s
i
z
e
 
=
 
M
a
t
h
.
m
a
x
(
2
2
,
 
M
a
t
h
.
m
i
n
(
4
4
,
 
M
a
t
h
.
f
l
o
o
r
(
5
4
0
 
/
 
M
a
t
h
.
m
a
x
(
C
n
,
 
1
)
)
)
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
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
3
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
-
2
 
r
o
u
n
d
e
d
-
m
d
 
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
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
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


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
`
r
e
p
e
a
t
(
$
{
C
n
}
,
 
$
{
s
i
z
e
}
p
x
)
`
,
 
g
r
i
d
A
u
t
o
R
o
w
s
:
 
`
$
{
s
i
z
e
}
p
x
`
,
 
g
a
p
:
 
3
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
g
r
i
d
.
m
a
p
(
(
r
o
w
,
 
r
)
 
=
>
 
r
o
w
.
m
a
p
(
(
_
,
 
c
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
l
 
=
 
c
e
l
l
S
t
y
l
e
(
r
,
 
c
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
 
=
 
f
r
a
m
e
.
d
i
s
t
[
r
]
[
c
]
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
k
i
n
d
 
=
 
g
r
i
d
[
r
]
[
c
]
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
`
$
{
r
}
-
$
{
c
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
C
e
l
l
C
l
i
c
k
(
r
,
 
c
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
f
o
n
t
-
m
o
n
o
 
f
o
n
t
-
b
o
l
d
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
:
 
s
i
z
e
,
 
h
e
i
g
h
t
:
 
s
i
z
e
,
 
b
a
c
k
g
r
o
u
n
d
:
 
c
o
l
.
b
g
,
 
c
o
l
o
r
:
 
c
o
l
.
f
g
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
c
o
l
.
b
o
r
d
e
r
}
`
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
5
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
s
i
z
e
 
>
 
3
0
 
?
 
"
0
.
7
5
r
e
m
"
 
:
 
"
0
.
6
5
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
k
i
n
d
 
=
=
=
 
"
w
a
l
l
"
 
?
 
"
"
 
:
 
k
i
n
d
 
=
=
=
 
"
s
o
u
r
c
e
"
 
?
 
"
S
"
 
:
 
k
i
n
d
 
=
=
=
 
"
t
a
r
g
e
t
"
 
?
 
"
T
"
 
:
 
d
 
?
?
 
"
"
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
)
)
}


 
 
 
 
 
 
<
/
d
i
v
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
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
3
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
<
L
e
g
e
n
d
S
w
a
t
c
h
 
c
o
l
o
r
=
{
T
H
E
M
E
.
s
u
c
c
e
s
s
}
 
l
a
b
e
l
=
"
s
o
u
r
c
e
"
 
/
>


 
 
 
 
 
 
 
 
<
L
e
g
e
n
d
S
w
a
t
c
h
 
c
o
l
o
r
=
{
T
H
E
M
E
.
d
a
n
g
e
r
}
 
l
a
b
e
l
=
"
t
a
r
g
e
t
"
 
/
>


 
 
 
 
 
 
 
 
<
L
e
g
e
n
d
S
w
a
t
c
h
 
c
o
l
o
r
=
"
#
3
3
4
1
5
5
"
 
l
a
b
e
l
=
"
w
a
l
l
"
 
/
>


 
 
 
 
 
 
 
 
<
L
e
g
e
n
d
S
w
a
t
c
h
 
c
o
l
o
r
=
"
#
0
6
b
6
d
4
"
 
l
a
b
e
l
=
"
f
r
o
n
t
i
e
r
 
(
q
u
e
u
e
)
"
 
/
>


 
 
 
 
 
 
 
 
<
L
e
g
e
n
d
S
w
a
t
c
h
 
c
o
l
o
r
=
"
#
3
b
8
2
f
6
"
 
l
a
b
e
l
=
"
c
u
r
r
e
n
t
"
 
/
>


 
 
 
 
 
 
 
 
<
L
e
g
e
n
d
S
w
a
t
c
h
 
c
o
l
o
r
=
"
r
g
b
a
(
1
3
9
,
9
2
,
2
4
6
,
0
.
6
)
"
 
l
a
b
e
l
=
"
v
i
s
i
t
e
d
 
(
d
a
r
k
e
r
 
=
 
c
l
o
s
e
r
)
"
 
/
>


 
 
 
 
 
 
 
 
<
L
e
g
e
n
d
S
w
a
t
c
h
 
c
o
l
o
r
=
"
#
f
b
b
f
2
4
"
 
l
a
b
e
l
=
"
s
h
o
r
t
e
s
t
 
p
a
t
h
"
 
/
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
{
f
r
a
m
e
.
m
e
s
s
a
g
e
}
<
/
C
a
l
l
o
u
t
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




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
V
i
s
u
a
l
i
z
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




c
o
n
s
t
 
D
E
F
A
U
L
T
_
G
R
I
D
 
=
 
[


 
 
"
S
.
.
.
.
.
#
.
.
.
"
,


 
 
"
.
#
#
#
.
.
#
.
.
.
"
,


 
 
"
.
.
.
#
.
.
.
.
.
.
"
,


 
 
"
#
#
#
#
.
.
#
#
#
.
"
,


 
 
"
.
.
.
.
.
.
#
.
T
.
"
,


]
.
j
o
i
n
(
"
\
n
"
)
;




f
u
n
c
t
i
o
n
 
V
i
s
u
a
l
i
z
e
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
[
i
n
p
u
t
S
t
r
,
 
s
e
t
I
n
p
u
t
S
t
r
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
D
E
F
A
U
L
T
_
G
R
I
D
)
;


 
 
c
o
n
s
t
 
[
d
i
a
g
,
 
s
e
t
D
i
a
g
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
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
t
o
o
l
,
 
s
e
t
T
o
o
l
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
<
P
a
i
n
t
T
o
o
l
>
(
"
w
a
l
l
"
)
;


 
 
c
o
n
s
t
 
[
g
r
i
d
S
t
a
t
e
,
 
s
e
t
G
r
i
d
S
t
a
t
e
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
(
)
 
=
>
 
p
a
r
s
e
G
r
i
d
(
D
E
F
A
U
L
T
_
G
R
I
D
)
!
)
;




 
 
c
o
n
s
t
 
a
p
p
l
y
I
n
p
u
t
 
=
 
(
v
:
 
s
t
r
i
n
g
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
p
 
=
 
p
a
r
s
e
G
r
i
d
(
v
)
;


 
 
 
 
i
f
 
(
p
)
 
{
 
s
e
t
I
n
p
u
t
S
t
r
(
v
)
;
 
s
e
t
G
r
i
d
S
t
a
t
e
(
p
)
;
 
}


 
 
}
;




 
 
f
u
n
c
t
i
o
n
 
o
n
C
e
l
l
C
l
i
c
k
(
r
:
 
n
u
m
b
e
r
,
 
c
:
 
n
u
m
b
e
r
)
 
{


 
 
 
 
c
o
n
s
t
 
n
e
x
t
:
 
C
e
l
l
K
i
n
d
[
]
[
]
 
=
 
g
r
i
d
S
t
a
t
e
.
g
r
i
d
.
m
a
p
(
(
r
o
w
)
 
=
>
 
[
.
.
.
r
o
w
]
)
;


 
 
 
 
l
e
t
 
n
e
x
t
S
r
c
 
=
 
g
r
i
d
S
t
a
t
e
.
s
r
c
;


 
 
 
 
l
e
t
 
n
e
x
t
T
g
t
 
=
 
g
r
i
d
S
t
a
t
e
.
t
g
t
;


 
 
 
 
i
f
 
(
t
o
o
l
 
=
=
=
 
"
s
o
u
r
c
e
"
)
 
{


 
 
 
 
 
 
i
f
 
(
n
e
x
t
S
r
c
)
 
n
e
x
t
[
n
e
x
t
S
r
c
[
0
]
]
[
n
e
x
t
S
r
c
[
1
]
]
 
=
 
"
e
m
p
t
y
"
;


 
 
 
 
 
 
n
e
x
t
[
r
]
[
c
]
 
=
 
"
s
o
u
r
c
e
"
;
 
n
e
x
t
S
r
c
 
=
 
[
r
,
 
c
]
;


 
 
 
 
 
 
i
f
 
(
n
e
x
t
T
g
t
 
&
&
 
n
e
x
t
T
g
t
[
0
]
 
=
=
=
 
r
 
&
&
 
n
e
x
t
T
g
t
[
1
]
 
=
=
=
 
c
)
 
n
e
x
t
T
g
t
 
=
 
n
u
l
l
;


 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
t
o
o
l
 
=
=
=
 
"
t
a
r
g
e
t
"
)
 
{


 
 
 
 
 
 
i
f
 
(
n
e
x
t
T
g
t
)
 
n
e
x
t
[
n
e
x
t
T
g
t
[
0
]
]
[
n
e
x
t
T
g
t
[
1
]
]
 
=
 
"
e
m
p
t
y
"
;


 
 
 
 
 
 
n
e
x
t
[
r
]
[
c
]
 
=
 
"
t
a
r
g
e
t
"
;
 
n
e
x
t
T
g
t
 
=
 
[
r
,
 
c
]
;


 
 
 
 
 
 
i
f
 
(
n
e
x
t
S
r
c
 
&
&
 
n
e
x
t
S
r
c
[
0
]
 
=
=
=
 
r
 
&
&
 
n
e
x
t
S
r
c
[
1
]
 
=
=
=
 
c
)
 
n
e
x
t
S
r
c
 
=
 
n
u
l
l
;


 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
t
o
o
l
 
=
=
=
 
"
w
a
l
l
"
)
 
{


 
 
 
 
 
 
i
f
 
(
n
e
x
t
[
r
]
[
c
]
 
=
=
=
 
"
s
o
u
r
c
e
"
 
|
|
 
n
e
x
t
[
r
]
[
c
]
 
=
=
=
 
"
t
a
r
g
e
t
"
)
 
r
e
t
u
r
n
;


 
 
 
 
 
 
n
e
x
t
[
r
]
[
c
]
 
=
 
n
e
x
t
[
r
]
[
c
]
 
=
=
=
 
"
w
a
l
l
"
 
?
 
"
e
m
p
t
y
"
 
:
 
"
w
a
l
l
"
;


 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
i
f
 
(
n
e
x
t
[
r
]
[
c
]
 
=
=
=
 
"
s
o
u
r
c
e
"
)
 
n
e
x
t
S
r
c
 
=
 
n
u
l
l
;


 
 
 
 
 
 
i
f
 
(
n
e
x
t
[
r
]
[
c
]
 
=
=
=
 
"
t
a
r
g
e
t
"
)
 
n
e
x
t
T
g
t
 
=
 
n
u
l
l
;


 
 
 
 
 
 
n
e
x
t
[
r
]
[
c
]
 
=
 
"
e
m
p
t
y
"
;


 
 
 
 
}


 
 
 
 
s
e
t
G
r
i
d
S
t
a
t
e
(
{
 
g
r
i
d
:
 
n
e
x
t
,
 
s
r
c
:
 
n
e
x
t
S
r
c
,
 
t
g
t
:
 
n
e
x
t
T
g
t
 
}
)
;


 
 
 
 
s
e
t
I
n
p
u
t
S
t
r
(
g
r
i
d
T
o
S
t
r
i
n
g
(
n
e
x
t
)
)
;


 
 
}




 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
=
 
u
s
e
M
e
m
o
(


 
 
 
 
(
)
 
=
>


 
 
 
 
 
 
g
r
i
d
S
t
a
t
e
.
s
r
c


 
 
 
 
 
 
 
 
?
 
b
f
s
F
r
a
m
e
s
(
g
r
i
d
S
t
a
t
e
.
g
r
i
d
,
 
g
r
i
d
S
t
a
t
e
.
s
r
c
,
 
g
r
i
d
S
t
a
t
e
.
t
g
t
,
 
d
i
a
g
)


 
 
 
 
 
 
 
 
:
 
[
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
}
,
 
m
e
s
s
a
g
e
:
 
"
C
l
i
c
k
 
t
h
e
 
S
o
u
r
c
e
 
t
o
o
l
 
a
n
d
 
t
a
p
 
a
 
c
e
l
l
 
t
o
 
b
e
g
i
n
.
"
,
 
d
i
s
t
:
 
g
r
i
d
S
t
a
t
e
.
g
r
i
d
.
m
a
p
(
(
r
)
 
=
>
 
r
.
m
a
p
(
(
)
 
=
>
 
n
u
l
l
)
)
,
 
f
r
o
n
t
i
e
r
:
 
[
]
,
 
c
u
r
r
e
n
t
:
 
n
u
l
l
,
 
p
a
t
h
:
 
n
u
l
l
 
}
 
a
s
 
F
r
a
m
e
]
,


 
 
 
 
[
g
r
i
d
S
t
a
t
e
,
 
d
i
a
g
]
,


 
 
)
;


 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
"
G
r
i
d
 
t
o
 
G
r
a
p
h
,
 
B
F
S
 
W
a
v
e
f
r
o
n
t
"


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
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
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
G
r
i
d
 
(
r
o
w
s
 
b
y
 
n
e
w
l
i
n
e
s
,
 
'
.
'
 
e
m
p
t
y
,
 
'
#
'
 
w
a
l
l
,
 
'
S
'
 
s
o
u
r
c
e
,
 
'
T
'
 
t
a
r
g
e
t
)
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
i
n
p
u
t
S
t
r
}


 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
{
D
E
F
A
U
L
T
_
G
R
I
D
}


 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
O
r
 
c
l
i
c
k
 
c
e
l
l
s
 
b
e
l
o
w
 
u
s
i
n
g
 
t
h
e
 
p
a
i
n
t
 
t
o
o
l
.
"


 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
M
a
z
e
"
,
 
v
a
l
u
e
:
 
D
E
F
A
U
L
T
_
G
R
I
D
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
O
p
e
n
"
,
 
v
a
l
u
e
:
 
"
S
.
.
.
.
.
.
.
.
\
n
.
.
.
.
.
.
.
.
.
\
n
.
.
.
.
.
.
.
.
.
\
n
.
.
.
.
.
.
.
.
T
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
S
p
i
r
a
l
"
,
 
v
a
l
u
e
:
 
"
S
.
.
.
.
.
.
.
.
\
n
#
#
#
#
#
#
#
#
.
\
n
.
.
.
.
.
.
.
#
.
\
n
.
#
#
#
#
#
.
#
.
\
n
.
#
.
.
.
#
.
#
.
\
n
.
#
.
T
.
#
.
#
.
\
n
.
#
.
.
.
#
.
#
.
\
n
.
#
#
#
#
#
.
#
.
\
n
.
.
.
.
.
.
.
.
.
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
U
n
r
e
a
c
h
a
b
l
e
"
,
 
v
a
l
u
e
:
 
"
S
.
#
.
.
.
.
.
.
\
n
.
.
#
.
.
.
.
.
.
\
n
.
.
#
.
#
#
#
#
.
\
n
.
.
#
.
#
.
.
#
.
\
n
.
.
.
.
#
T
.
#
.
\
n
.
.
.
.
#
#
#
#
.
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
a
p
p
l
y
I
n
p
u
t
}


 
 
 
 
 
 
 
 
 
 
/
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
2
 
f
l
e
x
-
w
r
a
p
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
m
o
n
o
 
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
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>
/
 
p
a
i
n
t
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
(
[
"
s
o
u
r
c
e
"
,
 
"
t
a
r
g
e
t
"
,
 
"
w
a
l
l
"
,
 
"
e
m
p
t
y
"
]
 
a
s
 
P
a
i
n
t
T
o
o
l
[
]
)
.
m
a
p
(
(
t
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
i
l
l
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
t
}
 
a
c
t
i
v
e
=
{
t
o
o
l
 
=
=
=
 
t
}
 
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
 
s
e
t
T
o
o
l
(
t
)
}
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
1
p
x
]
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
 
=
=
=
 
"
s
o
u
r
c
e
"
 
?
 
"
S
o
u
r
c
e
 
(
S
)
"
 
:
 
t
 
=
=
=
 
"
t
a
r
g
e
t
"
 
?
 
"
T
a
r
g
e
t
 
(
T
)
"
 
:
 
t
 
=
=
=
 
"
w
a
l
l
"
 
?
 
"
W
a
l
l
 
(
#
)
"
 
:
 
"
E
r
a
s
e
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
i
l
l
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
w
-
2
"
 
/
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
m
o
n
o
 
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
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>
/
 
m
o
v
e
s
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
P
i
l
l
B
u
t
t
o
n
 
a
c
t
i
v
e
=
{
!
d
i
a
g
}
 
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
 
s
e
t
D
i
a
g
(
f
a
l
s
e
)
}
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
1
p
x
]
"
>
4
-
d
i
r
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
i
l
l
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
P
i
l
l
B
u
t
t
o
n
 
a
c
t
i
v
e
=
{
d
i
a
g
}
 
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
 
s
e
t
D
i
a
g
(
t
r
u
e
)
}
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
1
p
x
]
"
>
8
-
d
i
r
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
i
l
l
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
P
S
E
U
D
O
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
f
l
a
s
h
K
e
y
s
=
{
f
r
a
m
e
?
.
f
l
a
s
h
K
e
y
 
?
 
[
f
r
a
m
e
.
f
l
a
s
h
K
e
y
]
 
:
 
[
]
}
 
/
>
}


 
 
 
 
>


 
 
 
 
 
 
{
f
r
a
m
e
 
?
 
(


 
 
 
 
 
 
 
 
<
G
r
i
d
V
i
z
 
g
r
i
d
=
{
g
r
i
d
S
t
a
t
e
.
g
r
i
d
}
 
f
r
a
m
e
=
{
f
r
a
m
e
}
 
o
n
C
e
l
l
C
l
i
c
k
=
{
o
n
C
e
l
l
C
l
i
c
k
}
 
/
>


 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
P
r
e
s
s
 
p
l
a
y
 
t
o
 
s
t
e
p
 
t
h
r
o
u
g
h
 
t
h
e
 
a
l
g
o
r
i
t
h
m
.
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
)
}


 
 
 
 
<
/
A
l
g
o
C
a
n
v
a
s
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
e
a
r
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
L
e
a
r
n
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
s
e
c
t
i
o
n
s
 
=
 
[


 
 
 
 
{
 
t
i
t
l
e
:
 
"
E
v
e
r
y
 
g
r
i
d
 
i
s
 
a
 
g
r
a
p
h
"
,
 
b
o
d
y
:
 
"
A
n
 
R
 
x
 
C
 
g
r
i
d
 
h
a
s
 
R
*
C
 
n
o
d
e
s
 
(
c
e
l
l
s
)
.
 
E
a
c
h
 
c
e
l
l
 
h
a
s
 
u
p
 
t
o
 
4
 
e
d
g
e
s
 
(
u
p
/
d
o
w
n
/
l
e
f
t
/
r
i
g
h
t
)
 
o
r
 
8
 
(
i
n
c
l
u
d
i
n
g
 
d
i
a
g
o
n
a
l
s
)
.
 
W
a
l
l
s
 
s
i
m
p
l
y
 
r
e
m
o
v
e
 
e
d
g
e
s
.
 
O
n
c
e
 
y
o
u
 
s
e
e
 
t
h
i
s
,
 
B
F
S
,
 
D
F
S
,
 
D
i
j
k
s
t
r
a
,
 
A
*
 
a
l
l
 
a
p
p
l
y
 
w
i
t
h
o
u
t
 
m
o
d
i
f
i
c
a
t
i
o
n
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
B
F
S
 
g
i
v
e
s
 
s
h
o
r
t
e
s
t
 
p
a
t
h
 
b
y
 
#
 
o
f
 
e
d
g
e
s
"
,
 
b
o
d
y
:
 
"
W
h
e
n
 
e
d
g
e
s
 
a
r
e
 
u
n
i
t
-
w
e
i
g
h
t
 
(
g
r
i
d
 
m
o
v
e
s
 
c
o
s
t
 
1
)
,
 
B
F
S
 
l
a
y
e
r
-
b
y
-
l
a
y
e
r
 
g
i
v
e
s
 
t
h
e
 
m
i
n
i
m
u
m
 
n
u
m
b
e
r
 
o
f
 
m
o
v
e
s
.
 
D
i
s
t
a
n
c
e
s
 
f
o
r
m
 
c
o
n
c
e
n
t
r
i
c
 
r
i
n
g
s
 
a
r
o
u
n
d
 
t
h
e
 
s
o
u
r
c
e
,
 
t
h
e
 
f
a
m
o
u
s
 
w
a
v
e
f
r
o
n
t
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
M
u
l
t
i
-
s
o
u
r
c
e
 
B
F
S
"
,
 
b
o
d
y
:
 
"
T
h
e
 
r
o
t
t
e
n
-
o
r
a
n
g
e
s
 
p
r
o
b
l
e
m
:
 
m
u
l
t
i
p
l
e
 
i
n
f
e
c
t
e
d
 
c
e
l
l
s
 
s
i
m
u
l
t
a
n
e
o
u
s
l
y
.
 
P
u
s
h
 
A
L
L
 
s
o
u
r
c
e
s
 
i
n
t
o
 
t
h
e
 
q
u
e
u
e
 
a
t
 
d
i
s
t
a
n
c
e
 
0
 
a
n
d
 
r
u
n
 
o
r
d
i
n
a
r
y
 
B
F
S
.
 
Y
o
u
 
g
e
t
 
t
h
e
 
t
i
m
e
 
e
a
c
h
 
f
r
e
s
h
 
o
r
a
n
g
e
 
r
o
t
s
 
i
n
 
o
n
e
 
p
a
s
s
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
G
r
a
p
h
 
t
h
i
n
k
i
n
g
 
b
e
y
o
n
d
 
g
r
i
d
s
"
,
 
b
o
d
y
:
 
"
W
o
r
d
 
l
a
d
d
e
r
:
 
w
o
r
d
s
 
a
r
e
 
n
o
d
e
s
;
 
a
n
 
e
d
g
e
 
j
o
i
n
s
 
w
o
r
d
s
 
d
i
f
f
e
r
i
n
g
 
b
y
 
e
x
a
c
t
l
y
 
o
n
e
 
l
e
t
t
e
r
.
 
B
F
S
 
g
i
v
e
s
 
t
h
e
 
s
h
o
r
t
e
s
t
 
t
r
a
n
s
f
o
r
m
a
t
i
o
n
.
 
T
h
e
 
'
g
r
i
d
'
 
c
a
n
 
b
e
 
a
n
y
 
s
t
r
u
c
t
u
r
e
d
 
s
t
a
t
e
 
s
p
a
c
e
,
 
c
h
e
s
s
 
p
o
s
i
t
i
o
n
s
,
 
s
l
i
d
e
 
p
u
z
z
l
e
s
,
 
e
v
e
n
 
R
u
b
i
k
'
s
 
c
u
b
e
.
"
 
}
,


 
 
]
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
 
f
l
e
x
-
c
o
l
 
g
a
p
-
5
"
>


 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>
g
r
i
d
 
t
o
 
g
r
a
p
h
 
m
o
d
e
l
i
n
g
<
/
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
T
i
t
l
e
>
T
h
e
 
s
a
m
e
 
B
F
S
 
s
o
l
v
e
s
 
m
a
z
e
,
 
f
l
o
o
d
 
f
i
l
l
,
 
a
n
d
 
w
o
r
d
 
l
a
d
d
e
r
<
/
S
e
c
t
i
o
n
T
i
t
l
e
>


 
 
 
 
 
 
 
 
<
L
e
d
e
>


 
 
 
 
 
 
 
 
 
 
S
t
o
p
 
t
h
i
n
k
i
n
g
 
"
I
 
h
a
v
e
 
a
 
g
r
i
d
,
 
I
 
n
e
e
d
 
a
 
c
u
s
t
o
m
 
a
l
g
o
r
i
t
h
m
.
"
 
S
t
a
r
t
 
t
h
i
n
k
i
n
g
 
"
I
 
h
a
v
e
 
a
 
g
r
a
p
h
;
 
h
e
r
e
'
s
 
i
t
s
 
a
d
j
a
c
e
n
c
y
 
r
u
l
e
.
"
 
T
h
e
 
s
a
m
e
 
B
F
S
 
y
o
u
 
l
e
a
r
n
e
d
 
f
o
r
 
g
r
a
p
h
s
 
s
o
l
v
e
s
 
m
a
z
e
 
s
h
o
r
t
e
s
t
 
p
a
t
h
,
 
f
l
o
o
d
 
f
i
l
l
,
 
r
o
t
t
e
n
 
o
r
a
n
g
e
s
,
 
k
n
i
g
h
t
'
s
 
m
i
n
i
m
u
m
 
m
o
v
e
s
,
 
a
n
d
 
w
o
r
d
 
l
a
d
d
e
r
s
,
 
u
n
c
h
a
n
g
e
d
.


 
 
 
 
 
 
 
 
<
/
L
e
d
e
>


 
 
 
 
 
 
<
/
d
i
v
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
g
r
i
d
 
g
a
p
-
3
"
 
s
t
y
l
e
=
{
{
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
r
e
p
e
a
t
(
a
u
t
o
-
f
i
t
,
 
m
i
n
m
a
x
(
2
4
0
p
x
,
 
1
f
r
)
)
"
 
}
}
>


 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
s
.
m
a
p
(
(
s
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
}
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
t
e
x
t
-
x
s
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
l
i
m
e
-
7
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
l
i
m
e
-
4
0
0
 
m
b
-
1
 
f
o
n
t
-
m
o
n
o
"
>
0
{
i
 
+
 
1
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
{
s
.
t
i
t
l
e
}
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
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
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
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
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>
{
s
.
b
o
d
y
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
C
a
r
d
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


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
T
r
y
 
I
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
T
r
y
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
p
r
o
b
l
e
m
s
 
=
 
[


 
 
 
 
{
 
q
:
 
"
O
n
 
a
 
5
x
5
 
o
p
e
n
 
g
r
i
d
,
 
s
h
o
r
t
e
s
t
 
B
F
S
 
d
i
s
t
a
n
c
e
 
(
4
-
d
i
r
)
 
f
r
o
m
 
(
0
,
0
)
 
t
o
 
(
4
,
4
)
?
"
,
 
a
:
 
"
8
"
 
}
,


 
 
 
 
{
 
q
:
 
"
S
a
m
e
 
g
r
i
d
 
b
u
t
 
8
-
d
i
r
e
c
t
i
o
n
a
l
 
m
o
v
e
s
?
"
,
 
a
:
 
"
4
"
 
}
,


 
 
 
 
{
 
q
:
 
"
R
o
t
t
e
n
-
o
r
a
n
g
e
s
:
 
3
x
3
 
g
r
i
d
,
 
i
n
i
t
i
a
l
l
y
 
o
n
l
y
 
(
1
,
1
)
 
r
o
t
t
e
n
,
 
a
l
l
 
o
t
h
e
r
s
 
f
r
e
s
h
.
 
H
o
w
 
m
a
n
y
 
m
i
n
u
t
e
s
 
u
n
t
i
l
 
a
l
l
 
a
r
e
 
r
o
t
t
e
n
 
(
4
-
d
i
r
)
?
"
,
 
a
:
 
"
2
"
 
}
,


 
 
 
 
{
 
q
:
 
"
W
o
r
d
 
l
a
d
d
e
r
 
l
e
n
g
t
h
 
f
r
o
m
 
'
h
i
t
'
 
t
o
 
'
c
o
g
'
 
v
i
a
 
d
i
c
t
=
{
h
o
t
,
d
o
t
,
d
o
g
,
l
o
t
,
l
o
g
,
c
o
g
}
.
 
(
i
n
c
l
u
d
i
n
g
 
b
o
t
h
 
e
n
d
s
)
"
,
 
a
:
 
"
5
"
 
}
,


 
 
]
;


 
 
c
o
n
s
t
 
[
g
u
e
s
s
e
s
,
 
s
e
t
G
u
e
s
s
e
s
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
<
s
t
r
i
n
g
[
]
>
(
p
r
o
b
l
e
m
s
.
m
a
p
(
(
)
 
=
>
 
"
"
)
)
;


 
 
c
o
n
s
t
 
[
s
h
o
w
n
,
 
s
e
t
S
h
o
w
n
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
<
b
o
o
l
e
a
n
[
]
>
(
p
r
o
b
l
e
m
s
.
m
a
p
(
(
)
 
=
>
 
f
a
l
s
e
)
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
"
>


 
 
 
 
 
 
<
C
a
l
l
o
u
t
>


 
 
 
 
 
 
 
 
A
p
p
l
y
 
B
F
S
 
m
e
n
t
a
l
l
y
,
 
e
a
c
h
 
n
o
d
e
 
a
t
 
d
i
s
t
a
n
c
e
 
d
 
e
n
q
u
e
u
e
s
 
d
i
s
t
a
n
c
e
-
(
d
+
1
)
 
n
e
i
g
h
b
o
r
s
.


 
 
 
 
 
 
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
{
p
r
o
b
l
e
m
s
.
m
a
p
(
(
p
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
r
r
e
c
t
 
=
 
g
u
e
s
s
e
s
[
i
]
.
t
r
i
m
(
)
 
=
=
=
 
p
.
a
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
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
s
m
 
t
e
x
t
-
s
t
o
n
e
-
8
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
s
t
o
n
e
-
2
0
0
 
m
b
-
3
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
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
m
r
-
1
"
>
#
{
i
 
+
 
1
}
.
<
/
s
p
a
n
>
 
{
p
.
q
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
f
l
e
x
 
g
a
p
-
2
 
f
l
e
x
-
w
r
a
p
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
g
u
e
s
s
e
s
[
i
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
{
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
g
u
e
s
s
e
s
]
;
 
v
[
i
]
 
=
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
;
 
s
e
t
G
u
e
s
s
e
s
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
y
o
u
r
 
a
n
s
w
e
r
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
2
8
 
p
x
-
3
 
p
y
-
1
.
5
 
r
o
u
n
d
e
d
-
m
d
 
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
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
b
g
-
w
h
i
t
e
 
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
0
0
 
t
e
x
t
-
s
t
o
n
e
-
9
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
s
t
o
n
e
-
5
0
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
s
m
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
b
o
r
d
e
r
-
s
t
o
n
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
{
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
s
h
o
w
n
]
;
 
v
[
i
]
 
=
 
t
r
u
e
;
 
s
e
t
S
h
o
w
n
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
3
 
p
y
-
1
.
5
 
r
o
u
n
d
e
d
-
m
d
 
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
s
t
o
n
e
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
w
h
i
t
e
/
1
0
 
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
 
t
e
x
t
-
s
t
o
n
e
-
6
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
s
t
o
n
e
-
4
0
0
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
h
o
v
e
r
:
b
o
r
d
e
r
-
s
t
o
n
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
v
e
a
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
h
o
w
n
[
i
]
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
{
`
p
x
-
3
 
p
y
-
1
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
x
s
 
f
o
n
t
-
b
o
l
d
 
$
{
c
o
r
r
e
c
t
 
?
 
"
b
g
-
l
i
m
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
l
i
m
e
-
4
0
0
/
1
0
 
t
e
x
t
-
l
i
m
e
-
8
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
l
i
m
e
-
2
0
0
 
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
l
i
m
e
-
4
0
0
"
 
:
 
"
b
g
-
r
o
s
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
r
o
s
e
-
4
0
0
/
1
0
 
t
e
x
t
-
r
o
s
e
-
8
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
r
o
s
e
-
2
0
0
 
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
r
o
s
e
-
4
0
0
"
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
r
r
e
c
t
 
?
 
`
C
o
r
r
e
c
t
 
-
 
$
{
p
.
a
}
`
 
:
 
`
A
n
s
w
e
r
:
 
$
{
p
.
a
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
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




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
I
n
s
i
g
h
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
I
n
s
i
g
h
t
T
a
b
(
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
4
"
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
I
n
t
e
r
v
i
e
w
 
r
e
f
r
a
m
i
n
g
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
p
 
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
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
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
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
W
h
e
n
 
t
h
e
 
i
n
t
e
r
v
i
e
w
e
r
 
s
a
y
s
 
"
i
n
 
a
 
2
D
 
g
r
i
d
.
.
.
"
,
 
y
o
u
r
 
f
i
r
s
t
 
m
o
v
e
 
i
s
 
o
u
t
 
l
o
u
d
:
 
"
I
'
l
l
 
m
o
d
e
l
 
t
h
i
s
 
a
s
 
a
 
g
r
a
p
h
 
w
h
e
r
e
 
e
a
c
h
 
c
e
l
l
 
i
s
 
a
 
n
o
d
e
 
a
n
d
 
e
d
g
e
s
 
c
o
n
n
e
c
t
 
o
r
t
h
o
g
o
n
a
l
 
n
e
i
g
h
b
o
r
s
 
t
h
a
t
 
a
r
e
n
'
t
 
w
a
l
l
s
.
 
B
F
S
 
g
i
v
e
s
 
s
h
o
r
t
e
s
t
 
p
a
t
h
.
"
 
T
h
i
s
 
e
a
r
n
s
 
c
r
e
d
i
t
 
b
e
f
o
r
e
 
y
o
u
'
v
e
 
w
r
i
t
t
e
n
 
a
 
l
i
n
e
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
C
o
m
p
l
e
x
i
t
y
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
p
 
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
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
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
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
B
F
S
 
o
n
 
a
n
 
R
 
x
 
C
 
g
r
i
d
 
v
i
s
i
t
s
 
e
a
c
h
 
c
e
l
l
 
a
t
 
m
o
s
t
 
o
n
c
e
:
 
O
(
R
*
C
)
.
 
E
a
c
h
 
v
i
s
i
t
 
c
h
e
c
k
s
 
a
 
c
o
n
s
t
a
n
t
 
n
u
m
b
e
r
 
o
f
 
n
e
i
g
h
b
o
r
s
 
(
4
 
o
r
 
8
)
.
 
S
p
a
c
e
 
f
o
r
 
t
h
e
 
d
i
s
t
a
n
c
e
 
m
a
p
 
a
n
d
 
q
u
e
u
e
 
i
s
 
O
(
R
*
C
)
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
W
h
e
n
 
B
F
S
 
i
s
 
w
r
o
n
g
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
p
 
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
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
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
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
I
f
 
e
d
g
e
s
 
c
a
r
r
y
 
d
i
f
f
e
r
e
n
t
 
w
e
i
g
h
t
s
 
(
s
a
y
,
 
w
a
t
e
r
 
c
e
l
l
s
 
c
o
s
t
 
5
,
 
l
a
n
d
 
c
e
l
l
s
 
c
o
s
t
 
1
)
,
 
B
F
S
 
n
o
 
l
o
n
g
e
r
 
g
i
v
e
s
 
s
h
o
r
t
e
s
t
.
 
S
w
i
t
c
h
 
t
o
 
D
i
j
k
s
t
r
a
.
 
I
f
 
w
e
i
g
h
t
s
 
a
r
e
 
0
/
1
,
 
u
s
e
 
t
h
e
 
0
-
1
 
B
F
S
 
v
a
r
i
a
n
t
 
w
i
t
h
 
a
 
d
e
q
u
e
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
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




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
R
o
o
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
P
r
o
p
s
 
{


 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
c
o
r
e
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
 
L
8
_
G
r
i
d
T
o
G
r
a
p
h
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
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
 
t
a
b
s
:
 
L
e
s
s
o
n
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
l
e
a
r
n
"
,
 
l
a
b
e
l
:
 
"
L
e
a
r
n
"
,
 
i
c
o
n
:
 
<
B
o
o
k
O
p
e
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
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
L
e
a
r
n
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
v
i
s
u
a
l
i
z
e
"
,
 
l
a
b
e
l
:
 
"
V
i
s
u
a
l
i
z
e
"
,
 
i
c
o
n
:
 
<
P
l
a
y
 
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
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
V
i
s
u
a
l
i
z
e
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
t
r
y
"
,
 
l
a
b
e
l
:
 
"
T
r
y
 
I
t
"
,
 
i
c
o
n
:
 
<
T
a
r
g
e
t
 
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
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
T
r
y
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
i
n
s
i
g
h
t
"
,
 
l
a
b
e
l
:
 
"
I
n
s
i
g
h
t
"
,
 
i
c
o
n
:
 
<
L
i
g
h
t
b
u
l
b
 
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
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
I
n
s
i
g
h
t
T
a
b
 
/
>
 
}
,


 
 
 
 
.
.
.
(
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G


 
 
 
 
 
 
?
 
[


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
d
:
 
"
p
r
a
c
t
i
c
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
P
r
a
c
t
i
c
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
<
C
o
d
e
2
 
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
4
 
h
-
4
"
 
/
>
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
t
e
n
t
:
 
<
P
r
a
c
t
i
c
e
T
a
b
 
t
o
p
i
c
S
l
u
g
=
{
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
}
 
/
>
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]


 
 
 
 
 
 
:
 
[
]
)
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
F
o
r
 
a
n
 
R
 
x
 
C
 
g
r
i
d
 
w
i
t
h
 
f
o
u
r
-
d
i
r
e
c
t
i
o
n
a
l
 
m
o
v
e
s
 
a
n
d
 
n
o
 
w
e
i
g
h
t
s
,
 
w
h
a
t
 
i
s
 
t
h
e
 
w
o
r
s
t
-
c
a
s
e
 
c
o
m
p
l
e
x
i
t
y
 
o
f
 
B
F
S
 
s
h
o
r
t
e
s
t
 
p
a
t
h
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
O
(
l
o
g
(
R
C
)
)
"
,
 
"
O
(
R
C
)
"
,
 
"
O
(
R
C
 
*
 
l
o
g
(
R
C
)
)
"
,
 
"
O
(
(
R
C
)
²
)
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
E
a
c
h
 
c
e
l
l
 
i
s
 
e
n
q
u
e
u
e
d
 
a
n
d
 
d
e
q
u
e
u
e
d
 
a
t
 
m
o
s
t
 
o
n
c
e
;
 
e
a
c
h
 
d
e
q
u
e
u
e
 
e
x
a
m
i
n
e
s
 
a
t
 
m
o
s
t
 
4
 
n
e
i
g
h
b
o
r
s
.
 
T
o
t
a
l
 
O
(
R
C
)
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
T
h
e
 
r
o
t
t
e
n
-
o
r
a
n
g
e
s
 
p
r
o
b
l
e
m
:
 
h
o
w
 
d
o
 
y
o
u
 
m
o
d
e
l
 
m
u
l
t
i
p
l
e
 
s
i
m
u
l
t
a
n
e
o
u
s
l
y
-
i
n
f
e
c
t
e
d
 
c
e
l
l
s
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
R
u
n
 
B
F
S
 
f
r
o
m
 
e
a
c
h
 
s
o
u
r
c
e
 
s
e
p
a
r
a
t
e
l
y
 
a
n
d
 
t
a
k
e
 
t
h
e
 
m
i
n
"
,


 
 
 
 
 
 
 
 
"
E
n
q
u
e
u
e
 
a
l
l
 
r
o
t
t
e
n
 
c
e
l
l
s
 
a
t
 
d
i
s
t
a
n
c
e
 
0
 
a
n
d
 
r
u
n
 
o
n
e
 
m
u
l
t
i
-
s
o
u
r
c
e
 
B
F
S
"
,


 
 
 
 
 
 
 
 
"
U
s
e
 
D
i
j
k
s
t
r
a
 
w
i
t
h
 
n
e
g
a
t
i
v
e
 
w
e
i
g
h
t
s
"
,


 
 
 
 
 
 
 
 
"
I
t
 
i
s
 
n
o
t
 
s
o
l
v
a
b
l
e
 
w
i
t
h
 
B
F
S
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
M
u
l
t
i
-
s
o
u
r
c
e
 
B
F
S
:
 
a
l
l
 
s
o
u
r
c
e
s
 
s
h
a
r
e
 
d
i
s
t
a
n
c
e
 
0
,
 
B
F
S
 
e
x
p
a
n
d
s
 
t
h
e
 
c
o
m
b
i
n
e
d
 
f
r
o
n
t
i
e
r
.
 
G
i
v
e
s
 
t
h
e
 
c
o
r
r
e
c
t
 
m
i
n
u
t
e
-
c
o
u
n
t
 
i
n
 
o
n
e
 
p
a
s
s
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
I
n
 
w
o
r
d
 
l
a
d
d
e
r
,
 
w
h
a
t
 
a
r
e
 
t
h
e
 
n
o
d
e
s
 
a
n
d
 
e
d
g
e
s
 
o
f
 
t
h
e
 
i
m
p
l
i
c
i
t
 
g
r
a
p
h
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
N
o
d
e
s
 
a
r
e
 
l
e
t
t
e
r
s
;
 
e
d
g
e
s
 
c
o
n
n
e
c
t
 
n
e
i
g
h
b
o
r
s
 
i
n
 
t
h
e
 
a
l
p
h
a
b
e
t
"
,


 
 
 
 
 
 
 
 
"
N
o
d
e
s
 
a
r
e
 
w
o
r
d
s
 
f
r
o
m
 
t
h
e
 
d
i
c
t
i
o
n
a
r
y
;
 
e
d
g
e
s
 
c
o
n
n
e
c
t
 
w
o
r
d
s
 
d
i
f
f
e
r
i
n
g
 
b
y
 
e
x
a
c
t
l
y
 
o
n
e
 
l
e
t
t
e
r
"
,


 
 
 
 
 
 
 
 
"
N
o
d
e
s
 
a
r
e
 
p
o
s
i
t
i
o
n
s
 
i
n
 
t
h
e
 
i
n
p
u
t
 
s
t
r
i
n
g
;
 
e
d
g
e
s
 
a
r
e
 
c
h
a
r
a
c
t
e
r
s
"
,


 
 
 
 
 
 
 
 
"
I
t
 
i
s
n
'
t
 
a
 
g
r
a
p
h
 
p
r
o
b
l
e
m
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
O
n
c
e
 
r
e
f
r
a
m
e
d
 
t
h
i
s
 
w
a
y
,
 
B
F
S
 
f
r
o
m
 
b
e
g
i
n
-
w
o
r
d
 
t
o
 
e
n
d
-
w
o
r
d
 
g
i
v
e
s
 
t
h
e
 
s
h
o
r
t
e
s
t
 
t
r
a
n
s
f
o
r
m
a
t
i
o
n
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
I
f
 
m
o
v
e
s
 
o
n
 
t
h
e
 
g
r
i
d
 
h
a
v
e
 
d
i
f
f
e
r
e
n
t
 
c
o
s
t
s
 
(
e
.
g
.
,
 
r
o
a
d
=
1
,
 
s
w
a
m
p
=
5
)
,
 
w
h
i
c
h
 
a
l
g
o
r
i
t
h
m
 
i
s
 
c
o
r
r
e
c
t
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
B
F
S
 
s
t
i
l
l
 
w
o
r
k
s
"
,
 
"
D
F
S
"
,
 
"
D
i
j
k
s
t
r
a
'
s
 
a
l
g
o
r
i
t
h
m
"
,
 
"
A
n
y
 
s
o
r
t
i
n
g
 
a
l
g
o
r
i
t
h
m
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
B
F
S
 
a
s
s
u
m
e
s
 
u
n
i
t
-
w
e
i
g
h
t
 
e
d
g
e
s
.
 
W
i
t
h
 
v
a
r
y
i
n
g
 
p
o
s
i
t
i
v
e
 
w
e
i
g
h
t
s
,
 
u
s
e
 
D
i
j
k
s
t
r
a
.
 
F
o
r
 
0
/
1
 
w
e
i
g
h
t
s
,
 
0
-
1
 
B
F
S
.
"
,


 
 
 
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
G
r
i
d
 
t
o
 
G
r
a
p
h
 
M
a
p
p
i
n
g
"


 
 
 
 
 
 
l
e
v
e
l
=
{
8
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
4
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
V
e
r
y
 
h
i
g
h
 
-
 
m
a
z
e
,
 
s
h
o
r
t
e
s
t
 
p
a
t
h
,
 
f
l
o
o
d
 
f
i
l
l
,
 
r
o
t
t
e
n
 
o
r
a
n
g
e
s
,
 
w
o
r
d
 
l
a
d
d
e
r
"


 
 
 
 
 
 
n
e
x
t
L
e
s
s
o
n
H
i
n
t
=
"
D
P
 
S
t
a
t
e
 
D
e
s
i
g
n
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}


