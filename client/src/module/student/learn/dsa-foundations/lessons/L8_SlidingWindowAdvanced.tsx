
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


 
 
I
n
l
i
n
e
C
o
d
e
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
s
l
i
d
i
n
g
-
w
i
n
d
o
w
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
 
 
T
y
p
e
s
 
&
 
l
o
c
a
l
 
C
e
l
l
S
t
a
t
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




t
y
p
e
 
C
e
l
l
S
t
a
t
e
 
=
 
"
d
e
f
a
u
l
t
"
 
|
 
"
w
i
n
d
o
w
"
 
|
 
"
a
c
t
i
v
e
"
 
|
 
"
f
r
o
n
t
i
e
r
"
 
|
 
"
c
o
m
p
a
r
e
"
 
|
 
"
s
w
a
p
"
;




c
o
n
s
t
 
S
T
A
T
E
_
S
T
Y
L
E
:
 
R
e
c
o
r
d
<
C
e
l
l
S
t
a
t
e
,
 
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
 
}
>
 
=
 
{


 
 
d
e
f
a
u
l
t
:
 
 
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
 
}
,


 
 
w
i
n
d
o
w
:
 
 
 
{
 
b
g
:
 
"
#
e
d
e
9
f
e
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
7
c
3
a
e
d
"
,
 
f
g
:
 
"
#
3
b
0
7
6
4
"
 
}
,


 
 
a
c
t
i
v
e
:
 
 
 
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
a
c
c
e
n
t
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
a
c
c
e
n
t
D
a
r
k
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
 
}
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
 
{
 
b
g
:
 
"
#
c
f
f
a
f
e
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
8
9
1
b
2
"
,
 
f
g
:
 
"
#
0
e
4
f
5
e
"
 
}
,


 
 
c
o
m
p
a
r
e
:
 
 
{
 
b
g
:
 
"
#
f
e
e
2
e
2
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
d
c
2
6
2
6
"
,
 
f
g
:
 
"
#
7
f
1
d
1
d
"
 
}
,


 
 
s
w
a
p
:
 
 
 
 
 
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
a
c
c
e
n
t
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
a
c
c
e
n
t
D
a
r
k
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
 
}
,


}
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
 
 
A
l
g
o
 
A
:
 
L
o
n
g
e
s
t
 
U
n
i
q
u
e
 
S
u
b
s
t
r
i
n
g
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
l
e
f
t
:
 
n
u
m
b
e
r
;


 
 
r
i
g
h
t
:
 
n
u
m
b
e
r
;


 
 
s
t
a
t
e
s
:
 
C
e
l
l
S
t
a
t
e
[
]
;


 
 
f
r
e
q
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
 
n
u
m
b
e
r
>
;


 
 
b
e
s
t
:
 
s
t
r
i
n
g
;


 
 
b
e
s
t
L
o
:
 
n
u
m
b
e
r
;


 
 
b
e
s
t
H
i
:
 
n
u
m
b
e
r
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
_
L
U
 
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
 
l
o
n
g
e
s
t
U
n
i
q
u
e
(
s
)
:
"
,


 
 
"
 
 
l
e
f
t
 
=
 
0
;
 
b
e
s
t
 
=
 
0
;
 
b
e
s
t
L
o
 
=
 
0
"
,


 
 
"
 
 
f
r
e
q
 
=
 
{
}
"
,


 
 
"
 
 
f
o
r
 
r
i
g
h
t
 
i
n
 
0
.
.
l
e
n
(
s
)
-
1
:
"
,


 
 
"
 
 
 
 
f
r
e
q
[
s
[
r
i
g
h
t
]
]
 
+
=
 
1
"
,


 
 
"
 
 
 
 
w
h
i
l
e
 
f
r
e
q
[
s
[
r
i
g
h
t
]
]
 
>
 
1
:
"
,


 
 
"
 
 
 
 
 
 
f
r
e
q
[
s
[
l
e
f
t
]
]
 
-
=
 
1
"
,


 
 
"
 
 
 
 
 
 
l
e
f
t
 
+
=
 
1
"
,


 
 
"
 
 
 
 
i
f
 
r
i
g
h
t
 
-
 
l
e
f
t
 
+
 
1
 
>
 
b
e
s
t
:
"
,


 
 
"
 
 
 
 
 
 
b
e
s
t
 
=
 
r
i
g
h
t
 
-
 
l
e
f
t
 
+
 
1
;
 
b
e
s
t
L
o
 
=
 
l
e
f
t
"
,


 
 
"
 
 
r
e
t
u
r
n
 
b
e
s
t
"
,


]
;




f
u
n
c
t
i
o
n
 
b
u
i
l
d
F
r
a
m
e
s
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
 
n
 
=
 
s
.
l
e
n
g
t
h
;


 
 
i
f
 
(
n
 
=
=
=
 
0
)
 
{


 
 
 
 
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
:
 
"
'
'
"
,
 
l
e
f
t
:
 
0
,
 
r
i
g
h
t
:
 
"
-
"
,
 
b
e
s
t
:
 
0
 
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
E
m
p
t
y
 
s
t
r
i
n
g
.
"
,
 
l
e
f
t
:
 
0
,
 
r
i
g
h
t
:
 
-
1
,
 
s
t
a
t
e
s
:
 
[
]
,
 
f
r
e
q
:
 
{
}
,
 
b
e
s
t
:
 
"
"
,
 
b
e
s
t
L
o
:
 
0
,
 
b
e
s
t
H
i
:
 
-
1
 
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


 
 
c
o
n
s
t
 
s
t
a
t
e
s
 
=
 
(
l
o
:
 
n
u
m
b
e
r
,
 
h
i
:
 
n
u
m
b
e
r
)
:
 
C
e
l
l
S
t
a
t
e
[
]
 
=
>


 
 
 
 
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
 
n
 
}
,
 
(
_
,
 
i
)
 
=
>
 
(
i
 
>
=
 
l
o
 
&
&
 
i
 
<
=
 
h
i
 
?
 
"
w
i
n
d
o
w
"
 
:
 
"
d
e
f
a
u
l
t
"
)
)
;




 
 
l
e
t
 
l
e
f
t
 
=
 
0
;
 
l
e
t
 
b
e
s
t
 
=
 
0
;
 
l
e
t
 
b
e
s
t
L
o
 
=
 
0
;
 
l
e
t
 
b
e
s
t
H
i
 
=
 
-
1
;


 
 
c
o
n
s
t
 
f
r
e
q
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
 
n
u
m
b
e
r
>
 
=
 
{
}
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
:
 
`
"
$
{
s
}
"
`
,
 
n
,
 
l
e
f
t
:
 
0
,
 
r
i
g
h
t
:
 
"
-
"
,
 
b
e
s
t
:
 
0
 
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
S
c
a
n
 
"
$
{
s
}
"
 
-
 
g
r
o
w
 
r
i
g
h
t
,
 
s
h
r
i
n
k
 
l
e
f
t
 
w
h
e
n
e
v
e
r
 
a
 
c
h
a
r
a
c
t
e
r
 
r
e
p
e
a
t
s
.
`
,
 
l
e
f
t
:
 
0
,
 
r
i
g
h
t
:
 
-
1
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
s
(
0
,
 
-
1
)
,
 
f
r
e
q
:
 
{
}
,
 
b
e
s
t
:
 
"
"
,
 
b
e
s
t
L
o
:
 
0
,
 
b
e
s
t
H
i
:
 
-
1
 
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
 
l
e
f
t
,
 
b
e
s
t
,
 
b
e
s
t
L
o
 
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
l
e
f
t
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
I
n
i
t
i
a
l
i
z
e
:
 
l
e
f
t
=
0
,
 
b
e
s
t
=
0
.
"
,
 
l
e
f
t
,
 
r
i
g
h
t
:
 
-
1
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
s
(
l
e
f
t
,
 
-
1
)
,
 
f
r
e
q
:
 
{
}
,
 
b
e
s
t
:
 
"
"
,
 
b
e
s
t
L
o
,
 
b
e
s
t
H
i
:
 
-
1
 
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
 
2
,
 
v
a
r
s
:
 
{
 
l
e
f
t
,
 
b
e
s
t
 
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
f
r
e
q
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
f
r
e
q
 
i
s
 
a
n
 
e
m
p
t
y
 
c
h
a
r
a
c
t
e
r
-
f
r
e
q
u
e
n
c
y
 
m
a
p
.
"
,
 
l
e
f
t
,
 
r
i
g
h
t
:
 
-
1
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
s
(
l
e
f
t
,
 
-
1
)
,
 
f
r
e
q
:
 
{
}
,
 
b
e
s
t
:
 
"
"
,
 
b
e
s
t
L
o
,
 
b
e
s
t
H
i
:
 
-
1
 
}
)
;




 
 
f
o
r
 
(
l
e
t
 
r
i
g
h
t
 
=
 
0
;
 
r
i
g
h
t
 
<
 
n
;
 
r
i
g
h
t
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
 
s
[
r
i
g
h
t
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
 
3
,
 
v
a
r
s
:
 
{
 
r
i
g
h
t
,
 
c
h
:
 
`
'
$
{
c
h
}
'
`
,
 
l
e
f
t
,
 
b
e
s
t
 
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
E
x
t
e
n
d
 
r
i
g
h
t
 
t
o
 
$
{
r
i
g
h
t
}
 
(
c
h
a
r
 
'
$
{
c
h
}
'
)
.
`
,
 
l
e
f
t
,
 
r
i
g
h
t
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
s
(
l
e
f
t
,
 
r
i
g
h
t
 
-
 
1
)
,
 
f
r
e
q
:
 
{
 
.
.
.
f
r
e
q
 
}
,
 
b
e
s
t
:
 
s
.
s
l
i
c
e
(
b
e
s
t
L
o
,
 
b
e
s
t
H
i
 
+
 
1
)
,
 
b
e
s
t
L
o
,
 
b
e
s
t
H
i
 
}
)
;


 
 
 
 
f
r
e
q
[
c
h
]
 
=
 
(
f
r
e
q
[
c
h
]
 
|
|
 
0
)
 
+
 
1
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
 
4
,
 
v
a
r
s
:
 
{
 
r
i
g
h
t
,
 
c
h
:
 
`
'
$
{
c
h
}
'
`
,
 
l
e
f
t
,
 
[
`
f
r
e
q
[
'
$
{
c
h
}
'
]
`
]
:
 
f
r
e
q
[
c
h
]
 
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
 
`
f
r
e
q
[
'
$
{
c
h
}
'
]
`
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
A
d
d
 
'
$
{
c
h
}
'
 
t
o
 
w
i
n
d
o
w
 
-
 
f
r
e
q
[
'
$
{
c
h
}
'
]
=
$
{
f
r
e
q
[
c
h
]
}
.
`
,
 
l
e
f
t
,
 
r
i
g
h
t
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
s
(
l
e
f
t
,
 
r
i
g
h
t
)
,
 
f
r
e
q
:
 
{
 
.
.
.
f
r
e
q
 
}
,
 
b
e
s
t
:
 
s
.
s
l
i
c
e
(
b
e
s
t
L
o
,
 
b
e
s
t
H
i
 
+
 
1
)
,
 
b
e
s
t
L
o
,
 
b
e
s
t
H
i
 
}
)
;


 
 
 
 
w
h
i
l
e
 
(
f
r
e
q
[
c
h
]
 
>
 
1
)
 
{


 
 
 
 
 
 
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
 
5
,
 
v
a
r
s
:
 
{
 
r
i
g
h
t
,
 
c
h
:
 
`
'
$
{
c
h
}
'
`
,
 
l
e
f
t
,
 
[
`
f
r
e
q
[
'
$
{
c
h
}
'
]
`
]
:
 
f
r
e
q
[
c
h
]
 
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
D
u
p
l
i
c
a
t
e
!
 
f
r
e
q
[
'
$
{
c
h
}
'
]
=
$
{
f
r
e
q
[
c
h
]
}
 
>
 
1
 
-
 
s
h
r
i
n
k
 
f
r
o
m
 
l
e
f
t
.
`
,
 
l
e
f
t
,
 
r
i
g
h
t
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
s
(
l
e
f
t
,
 
r
i
g
h
t
)
,
 
f
r
e
q
:
 
{
 
.
.
.
f
r
e
q
 
}
,
 
b
e
s
t
:
 
s
.
s
l
i
c
e
(
b
e
s
t
L
o
,
 
b
e
s
t
H
i
 
+
 
1
)
,
 
b
e
s
t
L
o
,
 
b
e
s
t
H
i
 
}
)
;


 
 
 
 
 
 
c
o
n
s
t
 
l
e
a
v
i
n
g
 
=
 
s
[
l
e
f
t
]
;


 
 
 
 
 
 
f
r
e
q
[
l
e
a
v
i
n
g
]
-
-
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
 
l
e
f
t
,
 
l
e
a
v
i
n
g
:
 
`
'
$
{
l
e
a
v
i
n
g
}
'
`
,
 
[
`
f
r
e
q
[
'
$
{
l
e
a
v
i
n
g
}
'
]
`
]
:
 
f
r
e
q
[
l
e
a
v
i
n
g
]
 
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
 
`
f
r
e
q
[
'
$
{
l
e
a
v
i
n
g
}
'
]
`
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
r
o
p
 
'
$
{
l
e
a
v
i
n
g
}
'
 
f
r
o
m
 
l
e
f
t
.
`
,
 
l
e
f
t
,
 
r
i
g
h
t
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
s
(
l
e
f
t
,
 
r
i
g
h
t
)
,
 
f
r
e
q
:
 
{
 
.
.
.
f
r
e
q
 
}
,
 
b
e
s
t
:
 
s
.
s
l
i
c
e
(
b
e
s
t
L
o
,
 
b
e
s
t
H
i
 
+
 
1
)
,
 
b
e
s
t
L
o
,
 
b
e
s
t
H
i
 
}
)
;


 
 
 
 
 
 
l
e
f
t
+
+
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
 
7
,
 
v
a
r
s
:
 
{
 
l
e
f
t
 
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
l
e
f
t
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
l
e
f
t
 
-
>
 
$
{
l
e
f
t
}
.
`
,
 
l
e
f
t
,
 
r
i
g
h
t
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
s
(
l
e
f
t
,
 
r
i
g
h
t
)
,
 
f
r
e
q
:
 
{
 
.
.
.
f
r
e
q
 
}
,
 
b
e
s
t
:
 
s
.
s
l
i
c
e
(
b
e
s
t
L
o
,
 
b
e
s
t
H
i
 
+
 
1
)
,
 
b
e
s
t
L
o
,
 
b
e
s
t
H
i
 
}
)
;


 
 
 
 
}


 
 
 
 
c
o
n
s
t
 
w
i
n
L
e
n
 
=
 
r
i
g
h
t
 
-
 
l
e
f
t
 
+
 
1
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
 
8
,
 
v
a
r
s
:
 
{
 
l
e
f
t
,
 
r
i
g
h
t
,
 
w
i
n
L
e
n
,
 
b
e
s
t
 
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
W
i
n
d
o
w
 
l
e
n
g
t
h
 
=
 
$
{
w
i
n
L
e
n
}
.
 
C
u
r
r
e
n
t
 
b
e
s
t
 
=
 
$
{
b
e
s
t
}
.
`
,
 
l
e
f
t
,
 
r
i
g
h
t
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
s
(
l
e
f
t
,
 
r
i
g
h
t
)
,
 
f
r
e
q
:
 
{
 
.
.
.
f
r
e
q
 
}
,
 
b
e
s
t
:
 
s
.
s
l
i
c
e
(
b
e
s
t
L
o
,
 
b
e
s
t
H
i
 
+
 
1
)
,
 
b
e
s
t
L
o
,
 
b
e
s
t
H
i
 
}
)
;


 
 
 
 
i
f
 
(
w
i
n
L
e
n
 
>
 
b
e
s
t
)
 
{


 
 
 
 
 
 
b
e
s
t
 
=
 
w
i
n
L
e
n
;
 
b
e
s
t
L
o
 
=
 
l
e
f
t
;
 
b
e
s
t
H
i
 
=
 
r
i
g
h
t
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
 
9
,
 
v
a
r
s
:
 
{
 
b
e
s
t
,
 
b
e
s
t
L
o
,
 
b
e
s
t
H
i
 
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
b
e
s
t
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
N
e
w
 
b
e
s
t
!
 
"
$
{
s
.
s
l
i
c
e
(
b
e
s
t
L
o
,
 
b
e
s
t
H
i
 
+
 
1
)
}
"
 
l
e
n
g
t
h
=
$
{
b
e
s
t
}
.
`
,
 
l
e
f
t
,
 
r
i
g
h
t
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
s
(
l
e
f
t
,
 
r
i
g
h
t
)
,
 
f
r
e
q
:
 
{
 
.
.
.
f
r
e
q
 
}
,
 
b
e
s
t
:
 
s
.
s
l
i
c
e
(
b
e
s
t
L
o
,
 
b
e
s
t
H
i
 
+
 
1
)
,
 
b
e
s
t
L
o
,
 
b
e
s
t
H
i
 
}
)
;


 
 
 
 
}


 
 
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
 
1
0
,
 
v
a
r
s
:
 
{
 
b
e
s
t
,
 
b
e
s
t
S
u
b
s
t
r
i
n
g
:
 
`
"
$
{
s
.
s
l
i
c
e
(
b
e
s
t
L
o
,
 
b
e
s
t
H
i
 
+
 
1
)
}
"
`
 
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
b
e
s
t
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
o
n
e
.
 
L
o
n
g
e
s
t
 
u
n
i
q
u
e
 
s
u
b
s
t
r
i
n
g
 
=
 
"
$
{
s
.
s
l
i
c
e
(
b
e
s
t
L
o
,
 
b
e
s
t
H
i
 
+
 
1
)
}
"
 
(
l
e
n
g
t
h
 
$
{
b
e
s
t
}
)
.
`
,
 
l
e
f
t
,
 
r
i
g
h
t
:
 
n
 
-
 
1
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
s
(
l
e
f
t
,
 
n
 
-
 
1
)
,
 
f
r
e
q
:
 
{
 
.
.
.
f
r
e
q
 
}
,
 
b
e
s
t
:
 
s
.
s
l
i
c
e
(
b
e
s
t
L
o
,
 
b
e
s
t
H
i
 
+
 
1
)
,
 
b
e
s
t
L
o
,
 
b
e
s
t
H
i
 
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
 
 
A
l
g
o
 
B
:
 
S
l
i
d
i
n
g
-
W
i
n
d
o
w
 
M
a
x
 
(
M
o
n
o
t
o
n
i
c
 
D
e
q
u
e
)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
D
e
q
u
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


 
 
i
:
 
n
u
m
b
e
r
;


 
 
w
i
n
d
o
w
L
o
:
 
n
u
m
b
e
r
;


 
 
d
e
q
u
e
:
 
n
u
m
b
e
r
[
]
;


 
 
s
t
a
t
e
s
:
 
C
e
l
l
S
t
a
t
e
[
]
;


 
 
r
e
s
u
l
t
:
 
n
u
m
b
e
r
[
]
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
_
D
Q
 
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
 
s
l
i
d
i
n
g
W
i
n
d
o
w
M
a
x
(
a
,
 
k
)
:
"
,


 
 
"
 
 
d
q
 
=
 
e
m
p
t
y
 
d
e
q
u
e
 
(
i
n
d
i
c
e
s
,
 
v
a
l
u
e
s
 
d
e
c
r
e
a
s
i
n
g
)
"
,


 
 
"
 
 
r
e
s
u
l
t
 
=
 
[
]
"
,


 
 
"
 
 
f
o
r
 
i
 
i
n
 
0
.
.
n
-
1
:
"
,


 
 
"
 
 
 
 
#
 
1
.
 
d
r
o
p
 
e
x
p
i
r
e
d
 
i
n
d
i
c
e
s
 
(
o
u
t
 
o
f
 
w
i
n
d
o
w
)
"
,


 
 
"
 
 
 
 
w
h
i
l
e
 
d
q
 
a
n
d
 
d
q
.
f
r
o
n
t
(
)
 
<
=
 
i
 
-
 
k
:
 
d
q
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
 
 
 
 
#
 
2
.
 
m
a
i
n
t
a
i
n
 
m
o
n
o
t
o
n
i
c
 
p
r
o
p
e
r
t
y
"
,


 
 
"
 
 
 
 
w
h
i
l
e
 
d
q
 
a
n
d
 
a
[
d
q
.
b
a
c
k
(
)
]
 
<
=
 
a
[
i
]
:
 
d
q
.
p
o
p
B
a
c
k
(
)
"
,


 
 
"
 
 
 
 
d
q
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
i
)
"
,


 
 
"
 
 
 
 
#
 
3
.
 
o
n
c
e
 
w
i
n
d
o
w
 
i
s
 
f
u
l
l
,
 
f
r
o
n
t
 
i
s
 
t
h
e
 
m
a
x
"
,


 
 
"
 
 
 
 
i
f
 
i
 
>
=
 
k
 
-
 
1
:
 
r
e
s
u
l
t
.
a
p
p
e
n
d
(
a
[
d
q
.
f
r
o
n
t
(
)
]
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
 
r
e
s
u
l
t
"
,


]
;




f
u
n
c
t
i
o
n
 
b
u
i
l
d
D
e
q
u
e
F
r
a
m
e
s
(
a
:
 
n
u
m
b
e
r
[
]
,
 
k
:
 
n
u
m
b
e
r
)
:
 
D
e
q
u
e
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
 
f
:
 
D
e
q
u
e
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
 
n
 
=
 
a
.
l
e
n
g
t
h
;


 
 
i
f
 
(
n
 
=
=
=
 
0
 
|
|
 
k
 
<
=
 
0
 
|
|
 
k
 
>
 
n
)
 
{


 
 
 
 
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
 
n
,
 
k
,
 
n
o
t
e
:
 
"
i
n
v
a
l
i
d
 
i
n
p
u
t
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
N
e
e
d
 
1
 
<
=
 
k
 
<
=
 
n
.
 
G
o
t
 
n
=
$
{
n
}
,
 
k
=
$
{
k
}
.
`
,
 
i
:
 
-
1
,
 
w
i
n
d
o
w
L
o
:
 
0
,
 
d
e
q
u
e
:
 
[
]
,
 
s
t
a
t
e
s
:
 
a
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
d
e
f
a
u
l
t
"
 
a
s
 
C
e
l
l
S
t
a
t
e
)
,
 
r
e
s
u
l
t
:
 
[
]
 
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


 
 
c
o
n
s
t
 
s
t
a
t
e
A
t
 
=
 
(
i
:
 
n
u
m
b
e
r
,
 
l
o
:
 
n
u
m
b
e
r
,
 
d
q
:
 
n
u
m
b
e
r
[
]
)
:
 
C
e
l
l
S
t
a
t
e
[
]
 
=
>


 
 
 
 
a
.
m
a
p
(
(
_
,
 
i
d
x
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
d
q
.
i
n
c
l
u
d
e
s
(
i
d
x
)
)
 
r
e
t
u
r
n
 
i
d
x
 
=
=
=
 
d
q
[
0
]
 
?
 
"
a
c
t
i
v
e
"
 
:
 
"
f
r
o
n
t
i
e
r
"
;


 
 
 
 
 
 
i
f
 
(
i
d
x
 
>
=
 
l
o
 
&
&
 
i
d
x
 
<
=
 
i
)
 
r
e
t
u
r
n
 
"
w
i
n
d
o
w
"
;


 
 
 
 
 
 
r
e
t
u
r
n
 
"
d
e
f
a
u
l
t
"
;


 
 
 
 
}
)
;




 
 
c
o
n
s
t
 
d
q
:
 
n
u
m
b
e
r
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
 
r
e
s
u
l
t
:
 
n
u
m
b
e
r
[
]
 
=
 
[
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
 
n
,
 
k
 
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
S
l
i
d
i
n
g
-
w
i
n
d
o
w
 
m
a
x
i
m
u
m
 
o
n
 
[
$
{
a
.
j
o
i
n
(
"
,
"
)
}
]
 
w
i
t
h
 
k
=
$
{
k
}
.
 
D
e
q
u
e
 
h
o
l
d
s
 
i
n
d
i
c
e
s
 
i
n
 
s
t
r
i
c
t
l
y
 
d
e
c
r
e
a
s
i
n
g
 
o
r
d
e
r
 
o
f
 
v
a
l
u
e
.
`
,
 
i
:
 
-
1
,
 
w
i
n
d
o
w
L
o
:
 
0
,
 
d
e
q
u
e
:
 
[
]
,
 
s
t
a
t
e
s
:
 
a
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
d
e
f
a
u
l
t
"
 
a
s
 
C
e
l
l
S
t
a
t
e
)
,
 
r
e
s
u
l
t
:
 
[
]
 
}
)
;




 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
n
;
 
i
+
+
)
 
{


 
 
 
 
c
o
n
s
t
 
l
o
 
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
 
i
 
-
 
k
 
+
 
1
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
 
3
,
 
v
a
r
s
:
 
{
 
i
,
 
"
a
[
i
]
"
:
 
a
[
i
]
,
 
w
i
n
d
o
w
L
o
:
 
l
o
,
 
d
e
q
u
e
:
 
d
q
.
l
e
n
g
t
h
 
=
=
=
 
0
 
?
 
"
[
]
"
 
:
 
`
[
$
{
d
q
.
j
o
i
n
(
"
,
"
)
}
]
`
 
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
i
 
=
 
$
{
i
}
.
 
W
i
n
d
o
w
 
w
i
l
l
 
b
e
 
[
$
{
l
o
}
,
$
{
i
}
]
.
 
a
[
$
{
i
}
]
 
=
 
$
{
a
[
i
]
}
.
`
,
 
i
,
 
w
i
n
d
o
w
L
o
:
 
l
o
,
 
d
e
q
u
e
:
 
[
.
.
.
d
q
]
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
A
t
(
i
,
 
l
o
,
 
d
q
)
,
 
r
e
s
u
l
t
:
 
[
.
.
.
r
e
s
u
l
t
]
 
}
)
;


 
 
 
 
w
h
i
l
e
 
(
d
q
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
d
q
[
0
]
 
<
=
 
i
 
-
 
k
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
e
x
p
i
r
e
d
 
=
 
d
q
[
0
]
;


 
 
 
 
 
 
d
q
.
s
h
i
f
t
(
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
 
5
,
 
v
a
r
s
:
 
{
 
e
x
p
i
r
e
d
,
 
w
i
n
d
o
w
L
o
:
 
l
o
 
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
e
x
p
i
r
e
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
I
n
d
e
x
 
$
{
e
x
p
i
r
e
d
}
 
f
e
l
l
 
o
u
t
 
o
f
 
w
i
n
d
o
w
.
 
D
r
o
p
 
f
r
o
m
 
f
r
o
n
t
.
`
,
 
i
,
 
w
i
n
d
o
w
L
o
:
 
l
o
,
 
d
e
q
u
e
:
 
[
.
.
.
d
q
]
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
A
t
(
i
,
 
l
o
,
 
d
q
)
,
 
r
e
s
u
l
t
:
 
[
.
.
.
r
e
s
u
l
t
]
 
}
)
;


 
 
 
 
}


 
 
 
 
w
h
i
l
e
 
(
d
q
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
a
[
d
q
[
d
q
.
l
e
n
g
t
h
 
-
 
1
]
]
 
<
=
 
a
[
i
]
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
p
o
p
p
e
d
 
=
 
d
q
[
d
q
.
l
e
n
g
t
h
 
-
 
1
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
 
7
,
 
v
a
r
s
:
 
{
 
p
o
p
p
e
d
,
 
[
`
a
[
$
{
p
o
p
p
e
d
}
]
`
]
:
 
a
[
p
o
p
p
e
d
]
,
 
[
`
a
[
$
{
i
}
]
`
]
:
 
a
[
i
]
 
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
a
[
$
{
p
o
p
p
e
d
}
]
=
$
{
a
[
p
o
p
p
e
d
]
}
 
<
=
 
a
[
$
{
i
}
]
=
$
{
a
[
i
]
}
.
 
$
{
p
o
p
p
e
d
}
 
c
a
n
 
n
e
v
e
r
 
b
e
 
m
a
x
 
w
h
i
l
e
 
$
{
i
}
 
i
s
 
i
n
 
w
i
n
d
o
w
 
-
 
p
o
p
 
t
a
i
l
.
`
,
 
i
,
 
w
i
n
d
o
w
L
o
:
 
l
o
,
 
d
e
q
u
e
:
 
[
.
.
.
d
q
]
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
A
t
(
i
,
 
l
o
,
 
d
q
)
,
 
r
e
s
u
l
t
:
 
[
.
.
.
r
e
s
u
l
t
]
 
}
)
;


 
 
 
 
 
 
d
q
.
p
o
p
(
)
;


 
 
 
 
}


 
 
 
 
d
q
.
p
u
s
h
(
i
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
 
8
,
 
v
a
r
s
:
 
{
 
p
u
s
h
e
d
:
 
i
,
 
[
`
a
[
$
{
i
}
]
`
]
:
 
a
[
i
]
,
 
d
e
q
u
e
:
 
`
[
$
{
d
q
.
j
o
i
n
(
"
,
"
)
}
]
`
 
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
e
q
u
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
 
`
P
u
s
h
 
i
=
$
{
i
}
 
(
v
a
l
u
e
 
$
{
a
[
i
]
}
)
 
t
o
 
b
a
c
k
.
 
D
e
q
u
e
 
v
a
l
u
e
s
:
 
[
$
{
d
q
.
m
a
p
(
(
x
)
 
=
>
 
a
[
x
]
)
.
j
o
i
n
(
"
,
"
)
}
]
 
(
d
e
c
r
e
a
s
i
n
g
)
.
`
,
 
i
,
 
w
i
n
d
o
w
L
o
:
 
l
o
,
 
d
e
q
u
e
:
 
[
.
.
.
d
q
]
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
A
t
(
i
,
 
l
o
,
 
d
q
)
,
 
r
e
s
u
l
t
:
 
[
.
.
.
r
e
s
u
l
t
]
 
}
)
;


 
 
 
 
i
f
 
(
i
 
>
=
 
k
 
-
 
1
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
m
a
x
V
a
l
 
=
 
a
[
d
q
[
0
]
]
;


 
 
 
 
 
 
r
e
s
u
l
t
.
p
u
s
h
(
m
a
x
V
a
l
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
0
,
 
v
a
r
s
:
 
{
 
w
i
n
d
o
w
:
 
`
[
$
{
l
o
}
,
$
{
i
}
]
`
,
 
m
a
x
:
 
m
a
x
V
a
l
,
 
f
r
o
m
I
d
x
:
 
d
q
[
0
]
 
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
r
e
s
u
l
t
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
W
i
n
d
o
w
 
[
$
{
l
o
}
,
$
{
i
}
]
 
c
o
m
p
l
e
t
e
.
 
M
a
x
 
=
 
a
[
$
{
d
q
[
0
]
}
]
 
=
 
$
{
m
a
x
V
a
l
}
.
 
E
m
i
t
 
t
o
 
r
e
s
u
l
t
.
`
,
 
i
,
 
w
i
n
d
o
w
L
o
:
 
l
o
,
 
d
e
q
u
e
:
 
[
.
.
.
d
q
]
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
A
t
(
i
,
 
l
o
,
 
d
q
)
,
 
r
e
s
u
l
t
:
 
[
.
.
.
r
e
s
u
l
t
]
 
}
)
;


 
 
 
 
}


 
 
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
 
1
1
,
 
v
a
r
s
:
 
{
 
r
e
s
u
l
t
:
 
`
[
$
{
r
e
s
u
l
t
.
j
o
i
n
(
"
,
"
)
}
]
`
,
 
t
o
t
a
l
O
p
s
:
 
"
<
=
 
2
n
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
D
o
n
e
.
 
R
e
s
u
l
t
 
=
 
[
$
{
r
e
s
u
l
t
.
j
o
i
n
(
"
,
 
"
)
}
]
.
 
E
a
c
h
 
i
n
d
e
x
 
p
u
s
h
e
d
 
a
n
d
 
p
o
p
p
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
 
-
>
 
O
(
n
)
.
`
,
 
i
:
 
n
 
-
 
1
,
 
w
i
n
d
o
w
L
o
:
 
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
 
n
 
-
 
k
)
,
 
d
e
q
u
e
:
 
[
.
.
.
d
q
]
,
 
s
t
a
t
e
s
:
 
s
t
a
t
e
A
t
(
n
 
-
 
1
,
 
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
 
n
 
-
 
k
)
,
 
d
q
)
,
 
r
e
s
u
l
t
:
 
[
.
.
.
r
e
s
u
l
t
]
 
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
 
 
L
o
c
a
l
 
M
e
m
o
r
y
C
e
l
l
s
 
h
e
l
p
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
 
M
e
m
o
r
y
C
e
l
l
s
(
{


 
 
v
a
l
u
e
s
,


 
 
s
t
a
t
e
s
,


 
 
p
o
i
n
t
e
r
s
,


 
 
c
e
l
l
W
i
d
t
h
 
=
 
4
0
,


}
:
 
{


 
 
v
a
l
u
e
s
:
 
s
t
r
i
n
g
[
]
;


 
 
s
t
a
t
e
s
:
 
C
e
l
l
S
t
a
t
e
[
]
;


 
 
p
o
i
n
t
e
r
s
?
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
 
n
u
m
b
e
r
>
;


 
 
c
e
l
l
W
i
d
t
h
?
:
 
n
u
m
b
e
r
;


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
s
t
a
r
t
 
g
a
p
-
1
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
e
n
d
 
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
v
a
l
u
e
s
.
m
a
p
(
(
v
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
 
s
t
 
=
 
s
t
a
t
e
s
[
i
]
 
?
?
 
"
d
e
f
a
u
l
t
"
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
t
y
l
e
 
=
 
S
T
A
T
E
_
S
T
Y
L
E
[
s
t
]
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
t
r
 
=
 
p
o
i
n
t
e
r
s
 
?
 
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
p
o
i
n
t
e
r
s
)
.
f
i
n
d
(
(
[
,
 
i
d
x
]
)
 
=
>
 
i
d
x
 
=
=
=
 
i
)
 
:
 
n
u
l
l
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
i
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
0
.
5
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
 
c
e
l
l
W
i
d
t
h
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
t
r
 
&
&
 
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
"
>
{
p
t
r
[
0
]
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
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
 
r
o
u
n
d
e
d
 
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
n
t
-
b
o
l
d
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
 
c
e
l
l
W
i
d
t
h
 
-
 
2
,
 
h
e
i
g
h
t
:
 
c
e
l
l
W
i
d
t
h
 
-
 
2
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
 
s
t
y
l
e
.
b
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
s
t
y
l
e
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
 
c
o
l
o
r
:
 
s
t
y
l
e
.
f
g
,
 
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
:
 
"
a
l
l
 
0
.
3
s
 
e
a
s
e
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
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
"
>
{
i
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
 
 
L
o
c
a
l
 
A
r
r
a
y
B
a
r
s
 
h
e
l
p
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
 
A
r
r
a
y
B
a
r
s
(
{


 
 
v
a
l
u
e
s
,


 
 
s
t
a
t
e
s
,


 
 
p
o
i
n
t
e
r
s
,


 
 
w
i
n
d
o
w
R
a
n
g
e
,


 
 
h
e
i
g
h
t
 
=
 
1
2
0
,


}
:
 
{


 
 
v
a
l
u
e
s
:
 
n
u
m
b
e
r
[
]
;


 
 
s
t
a
t
e
s
:
 
C
e
l
l
S
t
a
t
e
[
]
;


 
 
p
o
i
n
t
e
r
s
?
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
 
n
u
m
b
e
r
>
;


 
 
w
i
n
d
o
w
R
a
n
g
e
?
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
;


 
 
h
e
i
g
h
t
?
:
 
n
u
m
b
e
r
;


}
)
 
{


 
 
c
o
n
s
t
 
m
i
n
V
a
l
 
=
 
M
a
t
h
.
m
i
n
(
.
.
.
v
a
l
u
e
s
)
;


 
 
c
o
n
s
t
 
m
a
x
V
a
l
 
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
v
a
l
u
e
s
)
;


 
 
c
o
n
s
t
 
r
a
n
g
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
1
,
 
m
a
x
V
a
l
 
-
 
m
i
n
V
a
l
)
;


 
 
c
o
n
s
t
 
b
a
r
W
 
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
4
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
5
2
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
4
8
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
v
a
l
u
e
s
.
l
e
n
g
t
h
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
 
g
a
p
-
1
"
>


 
 
 
 
 
 
{
w
i
n
d
o
w
R
a
n
g
e
 
&
&
 
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


 
 
 
 
 
 
 
 
 
 
w
i
n
d
o
w
 
[
{
w
i
n
d
o
w
R
a
n
g
e
[
0
]
}
,
{
w
i
n
d
o
w
R
a
n
g
e
[
1
]
}
]


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
)
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
e
n
d
 
g
a
p
-
1
 
o
v
e
r
f
l
o
w
-
x
-
a
u
t
o
 
p
b
-
1
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
>


 
 
 
 
 
 
 
 
{
v
a
l
u
e
s
.
m
a
p
(
(
v
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
 
s
t
 
=
 
s
t
a
t
e
s
[
i
]
 
?
?
 
"
d
e
f
a
u
l
t
"
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
t
y
l
e
 
=
 
S
T
A
T
E
_
S
T
Y
L
E
[
s
t
]
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
h
 
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
8
,
 
M
a
t
h
.
r
o
u
n
d
(
(
(
v
 
-
 
m
i
n
V
a
l
)
 
/
 
r
a
n
g
e
)
 
*
 
(
h
e
i
g
h
t
 
-
 
3
2
)
 
+
 
8
)
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
t
r
 
=
 
p
o
i
n
t
e
r
s
 
?
 
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
p
o
i
n
t
e
r
s
)
.
f
i
n
d
(
(
[
,
 
i
d
x
]
)
 
=
>
 
i
d
x
 
=
=
=
 
i
)
 
:
 
n
u
l
l
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
i
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
0
.
5
 
s
h
r
i
n
k
-
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
 
w
i
d
t
h
:
 
b
a
r
W
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
t
r
 
&
&
 
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
"
>
{
p
t
r
[
0
]
}
<
/
d
i
v
>
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
"
>
{
v
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
 
b
a
r
W
 
-
 
4
,
 
h
e
i
g
h
t
:
 
b
h
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
 
s
t
y
l
e
.
b
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
s
t
y
l
e
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
 
4
,
 
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
:
 
"
a
l
l
 
0
.
3
s
 
e
a
s
e
"
 
}
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
"
>
[
{
i
}
]
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
 
 
V
i
z
 
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
 
S
l
i
d
i
n
g
W
i
n
d
o
w
V
i
z
(
{
 
f
r
a
m
e
,
 
s
 
}
:
 
{
 
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
 
s
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


 
 
c
o
n
s
t
 
c
h
a
r
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
"
)
;


 
 
c
o
n
s
t
 
p
o
i
n
t
e
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
 
n
u
m
b
e
r
>
 
=
 
{
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
l
e
f
t
 
>
=
 
0
 
&
&
 
f
r
a
m
e
.
l
e
f
t
 
<
 
s
.
l
e
n
g
t
h
)
 
p
o
i
n
t
e
r
s
[
"
l
e
f
t
"
]
 
=
 
f
r
a
m
e
.
l
e
f
t
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
r
i
g
h
t
 
>
=
 
0
 
&
&
 
f
r
a
m
e
.
r
i
g
h
t
 
<
 
s
.
l
e
n
g
t
h
)
 
p
o
i
n
t
e
r
s
[
"
r
i
g
h
t
"
]
 
=
 
f
r
a
m
e
.
r
i
g
h
t
;


 
 
c
o
n
s
t
 
f
r
e
q
E
n
t
r
i
e
s
 
=
 
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
f
r
a
m
e
.
f
r
e
q
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
[
,
 
v
]
)
 
=
>
 
v
 
>
 
0
)
;


 
 
c
o
n
s
t
 
m
a
x
F
 
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
1
,
 
.
.
.
f
r
e
q
E
n
t
r
i
e
s
.
m
a
p
(
(
[
,
 
v
]
)
 
=
>
 
v
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
5
"
>


 
 
 
 
 
 
<
M
e
m
o
r
y
C
e
l
l
s
 
v
a
l
u
e
s
=
{
c
h
a
r
s
}
 
s
t
a
t
e
s
=
{
f
r
a
m
e
.
s
t
a
t
e
s
}
 
p
o
i
n
t
e
r
s
=
{
p
o
i
n
t
e
r
s
}
 
c
e
l
l
W
i
d
t
h
=
{
4
0
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
g
r
i
d
 
g
a
p
-
4
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
m
i
n
m
a
x
(
0
,
1
.
1
f
r
)
 
m
i
n
m
a
x
(
0
,
1
f
r
)
"
 
}
}
>


 
 
 
 
 
 
 
 
<
C
a
r
d
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
 
m
b
-
2
"
>
W
i
n
d
o
w
 
S
t
a
t
e
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
 
i
t
e
m
s
-
b
a
s
e
l
i
n
e
 
g
a
p
-
2
 
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
t
e
x
t
-
x
s
 
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
C
u
r
r
e
n
t
:
<
/
s
p
a
n
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
m
o
n
o
 
t
e
x
t
-
b
a
s
e
 
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
 
p
x
-
2
 
p
y
-
0
.
5
 
r
o
u
n
d
e
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
l
i
m
e
-
3
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
l
i
m
e
-
4
0
0
/
3
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
r
i
g
h
t
 
>
=
 
f
r
a
m
e
.
l
e
f
t
 
?
 
`
"
$
{
s
.
s
l
i
c
e
(
f
r
a
m
e
.
l
e
f
t
,
 
f
r
a
m
e
.
r
i
g
h
t
 
+
 
1
)
}
"
`
 
:
 
'
"
"
'
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
x
s
 
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
l
e
n
=
{
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
 
f
r
a
m
e
.
r
i
g
h
t
 
-
 
f
r
a
m
e
.
l
e
f
t
 
+
 
1
)
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
 
m
b
-
2
"
>
C
h
a
r
 
F
r
e
q
u
e
n
c
y
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
{
f
r
e
q
E
n
t
r
i
e
s
.
l
e
n
g
t
h
 
=
=
=
 
0
 
?
 
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
t
e
x
t
-
x
s
 
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
 
i
t
a
l
i
c
"
>
e
m
p
t
y
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
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
e
n
d
 
g
a
p
-
1
.
5
"
 
s
t
y
l
e
=
{
{
 
m
i
n
H
e
i
g
h
t
:
 
7
2
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
e
q
E
n
t
r
i
e
s
.
m
a
p
(
(
[
c
,
 
v
]
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
h
 
=
 
1
6
 
+
 
(
v
 
/
 
m
a
x
F
)
 
*
 
4
4
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
u
p
 
=
 
v
 
>
 
1
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
c
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
1
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
s
t
a
r
t
 
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
 
p
t
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
w
h
i
t
e
 
r
o
u
n
d
e
d
-
t
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
 
2
6
,
 
h
e
i
g
h
t
:
 
h
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
 
d
u
p
 
?
 
"
#
d
c
2
6
2
6
"
 
:
 
T
H
E
M
E
.
a
c
c
e
n
t
,
 
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
:
 
"
h
e
i
g
h
t
 
0
.
3
s
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
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
s
t
o
n
e
-
3
0
0
"
>
'
{
c
}
'
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
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
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
b
o
r
d
e
r
-
2
 
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
2
"
>
B
e
s
t
 
A
n
s
w
e
r
 
S
o
 
F
a
r
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
t
e
x
t
-
2
x
l
 
f
o
n
t
-
b
o
l
d
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
b
e
s
t
 
?
 
`
"
$
{
f
r
a
m
e
.
b
e
s
t
}
"
`
 
:
 
"
-
"
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
t
e
x
t
-
x
s
 
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
l
e
n
g
t
h
 
=
 
<
s
t
r
o
n
g
 
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
t
o
n
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
s
t
o
n
e
-
3
0
0
"
>
{
f
r
a
m
e
.
b
e
s
t
.
l
e
n
g
t
h
}
<
/
s
t
r
o
n
g
>
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




f
u
n
c
t
i
o
n
 
D
e
q
u
e
V
i
z
(
{
 
f
r
a
m
e
,
 
a
,
 
k
C
l
a
m
p
e
d
 
}
:
 
{
 
f
r
a
m
e
:
 
D
e
q
u
e
F
r
a
m
e
;
 
a
:
 
n
u
m
b
e
r
[
]
;
 
k
C
l
a
m
p
e
d
:
 
n
u
m
b
e
r
 
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
A
r
r
a
y
B
a
r
s
 
v
a
l
u
e
s
=
{
a
}
 
s
t
a
t
e
s
=
{
f
r
a
m
e
.
s
t
a
t
e
s
}
 
p
o
i
n
t
e
r
s
=
{
f
r
a
m
e
.
i
 
>
=
 
0
 
?
 
{
 
i
:
 
f
r
a
m
e
.
i
 
}
 
:
 
{
}
}
 
w
i
n
d
o
w
R
a
n
g
e
=
{
f
r
a
m
e
.
i
 
>
=
 
0
 
?
 
[
f
r
a
m
e
.
w
i
n
d
o
w
L
o
,
 
f
r
a
m
e
.
i
]
 
:
 
u
n
d
e
f
i
n
e
d
}
 
h
e
i
g
h
t
=
{
1
4
0
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
g
r
i
d
 
g
a
p
-
4
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
m
i
n
m
a
x
(
0
,
1
.
1
f
r
)
 
m
i
n
m
a
x
(
0
,
1
f
r
)
"
 
}
}
>


 
 
 
 
 
 
 
 
<
C
a
r
d
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
 
m
b
-
2
"
>
D
e
q
u
e
 
(
f
r
o
n
t
 
t
o
 
b
a
c
k
)
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
d
e
q
u
e
.
l
e
n
g
t
h
 
=
=
=
 
0
 
?
 
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
t
e
x
t
-
x
s
 
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
 
i
t
a
l
i
c
"
>
e
m
p
t
y
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
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
 
g
a
p
-
1
.
5
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
d
e
q
u
e
.
m
a
p
(
(
i
d
x
,
 
j
)
 
=
>
 
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
j
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
 
p
x
-
2
.
5
 
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
 
j
 
=
=
=
 
0
 
?
 
T
H
E
M
E
.
a
c
c
e
n
t
 
:
 
"
r
g
b
a
(
6
,
1
8
2
,
2
1
2
,
0
.
1
5
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
j
 
=
=
=
 
0
 
?
 
"
#
f
f
f
"
 
:
 
"
#
0
8
9
1
b
2
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
j
 
=
=
=
 
0
 
?
 
"
n
o
n
e
"
 
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
6
,
1
8
2
,
2
1
2
,
0
.
4
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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
9
p
x
]
 
o
p
a
c
i
t
y
-
8
0
"
>
i
d
x
 
{
i
d
x
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
{
a
[
i
d
x
]
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
d
i
v
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
}


 
 
 
 
 
 
 
 
 
 
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
 
m
t
-
2
 
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
n
v
a
r
i
a
n
t
:
 
v
a
l
u
e
s
 
s
t
r
i
c
t
l
y
 
d
e
c
r
e
a
s
i
n
g
 
f
r
o
n
t
 
t
o
 
b
a
c
k
.
 
F
r
o
n
t
 
i
n
d
e
x
 
h
o
l
d
s
 
t
h
e
 
w
i
n
d
o
w
 
m
a
x
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
b
o
r
d
e
r
-
2
 
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
2
"
>
R
e
s
u
l
t
 
(
w
i
n
d
o
w
 
m
a
x
e
s
 
s
o
 
f
a
r
)
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
r
e
s
u
l
t
.
l
e
n
g
t
h
 
=
=
=
 
0
 
?
 
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
t
e
x
t
-
x
s
 
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
 
i
t
a
l
i
c
"
>
f
i
r
s
t
 
{
k
C
l
a
m
p
e
d
}
 
e
l
e
m
e
n
t
s
 
f
o
r
m
 
w
i
n
d
o
w
 
0
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
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
l
g
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
{
f
r
a
m
e
.
r
e
s
u
l
t
.
j
o
i
n
(
"
,
 
"
)
}
]


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
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
 
 
S
u
b
-
v
i
s
u
a
l
i
z
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
 
L
o
n
g
e
s
t
U
n
i
q
u
e
V
i
z
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
"
a
b
c
a
b
c
b
b
"
)
;


 
 
c
o
n
s
t
 
s
 
=
 
i
n
p
u
t
S
t
r
.
s
l
i
c
e
(
0
,
 
1
8
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
 
b
u
i
l
d
F
r
a
m
e
s
(
s
)
,
 
[
s
]
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
L
o
n
g
e
s
t
 
S
u
b
s
t
r
i
n
g
 
W
i
t
h
o
u
t
 
R
e
p
e
a
t
i
n
g
 
C
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
I
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
"
e
.
g
.
 
a
b
c
a
b
c
b
b
"


 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
U
p
 
t
o
 
1
8
 
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
.
 
W
a
t
c
h
 
t
h
e
 
w
i
n
d
o
w
 
s
l
i
d
e
 
a
n
d
 
s
h
r
i
n
k
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
a
b
c
a
b
c
b
b
"
,
 
v
a
l
u
e
:
 
"
a
b
c
a
b
c
b
b
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
b
b
b
b
b
"
,
 
v
a
l
u
e
:
 
"
b
b
b
b
b
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
p
w
w
k
e
w
"
,
 
v
a
l
u
e
:
 
"
p
w
w
k
e
w
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
d
v
d
f
"
,
 
v
a
l
u
e
:
 
"
d
v
d
f
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
a
l
l
 
u
n
i
q
u
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
a
b
c
d
e
f
g
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
(
v
)
 
=
>
 
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
}


 
 
 
 
 
 
 
 
 
 
o
n
R
a
n
d
o
m
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
 
c
h
a
r
s
 
=
 
"
a
b
c
d
e
"
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
L
 
=
 
6
 
+
 
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
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
6
)
;


 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
 
o
u
t
 
=
 
"
"
;


 
 
 
 
 
 
 
 
 
 
 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
L
;
 
i
+
+
)
 
o
u
t
 
+
=
 
c
h
a
r
s
[
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
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
c
h
a
r
s
.
l
e
n
g
t
h
)
]
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
o
u
t
)
;


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
/
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
_
L
U
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
S
l
i
d
i
n
g
W
i
n
d
o
w
V
i
z
 
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
 
s
=
{
s
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
N
u
m
s
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
 
n
u
m
b
e
r
[
]
 
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
 
p
a
r
t
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
/
[
,
\
s
]
+
/
)
.
m
a
p
(
(
x
)
 
=
>
 
x
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


 
 
c
o
n
s
t
 
n
u
m
s
 
=
 
p
a
r
t
s
.
m
a
p
(
N
u
m
b
e
r
)
;


 
 
i
f
 
(
n
u
m
s
.
s
o
m
e
(
(
n
)
 
=
>
 
N
u
m
b
e
r
.
i
s
N
a
N
(
n
)
)
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


 
 
r
e
t
u
r
n
 
n
u
m
s
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
 
W
i
n
d
o
w
M
a
x
V
i
z
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
"
1
,
 
3
,
 
-
1
,
 
-
3
,
 
5
,
 
3
,
 
6
,
 
7
"
)
;


 
 
c
o
n
s
t
 
[
k
,
 
s
e
t
K
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
3
)
;


 
 
c
o
n
s
t
 
a
 
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
 
p
a
r
s
e
N
u
m
s
(
i
n
p
u
t
S
t
r
)
 
?
?
 
[
1
,
 
3
,
 
-
1
,
 
-
3
,
 
5
,
 
3
,
 
6
,
 
7
]
,
 
[
i
n
p
u
t
S
t
r
]
)
;


 
 
c
o
n
s
t
 
k
C
l
a
m
p
e
d
 
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
1
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
k
,
 
a
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
 
b
u
i
l
d
D
e
q
u
e
F
r
a
m
e
s
(
a
,
 
k
C
l
a
m
p
e
d
)
,
 
[
a
,
 
k
C
l
a
m
p
e
d
]
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
{
`
S
l
i
d
i
n
g
-
W
i
n
d
o
w
 
M
a
x
i
m
u
m
 
(
k
=
$
{
k
C
l
a
m
p
e
d
}
)
`
}


 
 
 
 
 
 
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
 
g
a
p
-
3
 
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
e
n
d
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
f
l
e
x
-
1
 
m
i
n
-
w
-
6
4
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
A
r
r
a
y
 
(
c
o
m
m
a
-
s
e
p
a
r
a
t
e
d
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
W
a
t
c
h
 
t
h
e
 
d
e
q
u
e
 
m
a
i
n
t
a
i
n
 
a
 
s
t
r
i
c
t
l
y
 
d
e
c
r
e
a
s
i
n
g
 
s
e
q
u
e
n
c
e
.
 
E
a
c
h
 
i
n
d
e
x
 
e
n
t
e
r
s
 
a
n
d
 
l
e
a
v
e
s
 
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
 
-
>
 
O
(
n
)
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
C
l
a
s
s
i
c
 
L
C
2
3
9
"
,
 
v
a
l
u
e
:
 
"
1
,
 
3
,
 
-
1
,
 
-
3
,
 
5
,
 
3
,
 
6
,
 
7
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
I
n
c
r
e
a
s
i
n
g
"
,
 
v
a
l
u
e
:
 
"
1
,
 
2
,
 
3
,
 
4
,
 
5
,
 
6
,
 
7
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
D
e
c
r
e
a
s
i
n
g
"
,
 
v
a
l
u
e
:
 
"
9
,
 
7
,
 
5
,
 
3
,
 
1
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
A
l
l
 
e
q
u
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
4
,
 
4
,
 
4
,
 
4
,
 
4
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
W
i
t
h
 
d
u
p
e
s
"
,
 
v
a
l
u
e
:
 
"
2
,
 
1
,
 
5
,
 
1
,
 
3
,
 
2
,
 
5
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
(
v
)
 
=
>
 
{
 
i
f
 
(
p
a
r
s
e
N
u
m
s
(
v
)
)
 
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
/
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
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
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
 
b
l
o
c
k
 
m
b
-
1
"
>
k
<
/
l
a
b
e
l
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
n
u
m
b
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
i
n
=
{
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
a
x
=
{
a
.
l
e
n
g
t
h
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
k
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
 
s
e
t
K
(
M
a
t
h
.
m
a
x
(
1
,
 
N
u
m
b
e
r
(
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
)
 
|
|
 
1
)
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
w
-
2
0
 
p
x
-
2
 
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
_
D
Q
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
D
e
q
u
e
V
i
z
 
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
 
a
=
{
a
}
 
k
C
l
a
m
p
e
d
=
{
k
C
l
a
m
p
e
d
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
 
 
V
i
s
u
a
l
i
z
e
 
t
a
b
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
M
o
d
e
 
=
 
"
l
o
n
g
e
s
t
-
u
n
i
q
u
e
"
 
|
 
"
w
i
n
d
o
w
-
m
a
x
"
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
m
o
d
e
,
 
s
e
t
M
o
d
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
<
M
o
d
e
>
(
"
l
o
n
g
e
s
t
-
u
n
i
q
u
e
"
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
4
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
m
o
d
e
 
=
=
=
 
"
l
o
n
g
e
s
t
-
u
n
i
q
u
e
"
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
M
o
d
e
(
"
l
o
n
g
e
s
t
-
u
n
i
q
u
e
"
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
L
o
n
g
e
s
t
 
U
n
i
q
u
e
 
S
u
b
s
t
r
i
n
g
 
(
L
C
3
)
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
m
o
d
e
 
=
=
=
 
"
w
i
n
d
o
w
-
m
a
x
"
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
M
o
d
e
(
"
w
i
n
d
o
w
-
m
a
x
"
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
S
l
i
d
i
n
g
-
W
i
n
d
o
w
 
M
a
x
 
v
i
a
 
M
o
n
o
-
D
e
q
u
e
 
(
L
C
2
3
9
)
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


 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
l
o
n
g
e
s
t
-
u
n
i
q
u
e
"
 
?
 
<
L
o
n
g
e
s
t
U
n
i
q
u
e
V
i
z
 
/
>
 
:
 
<
W
i
n
d
o
w
M
a
x
V
i
z
 
/
>
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
W
h
a
t
 
i
s
 
a
n
 
a
d
v
a
n
c
e
d
 
s
l
i
d
i
n
g
 
w
i
n
d
o
w
?
"
,
 
b
o
d
y
:
 
"
F
i
x
e
d
-
s
i
z
e
 
w
i
n
d
o
w
s
 
a
r
e
 
e
a
s
y
,
 
y
o
u
 
s
l
i
d
e
 
a
 
r
u
l
e
r
 
o
f
 
w
i
d
t
h
 
k
 
a
c
r
o
s
s
 
t
h
e
 
a
r
r
a
y
.
 
A
d
v
a
n
c
e
d
 
m
e
a
n
s
 
t
h
e
 
w
i
n
d
o
w
'
s
 
w
i
d
t
h
 
i
s
 
n
o
t
 
f
i
x
e
d
;
 
i
t
 
g
r
o
w
s
 
w
h
i
l
e
 
a
 
c
o
n
d
i
t
i
o
n
 
h
o
l
d
s
 
a
n
d
 
s
h
r
i
n
k
s
 
t
h
e
 
i
n
s
t
a
n
t
 
t
h
e
 
c
o
n
d
i
t
i
o
n
 
b
r
e
a
k
s
.
 
T
w
o
 
p
o
i
n
t
e
r
s
,
 
o
n
e
 
m
o
v
i
n
g
 
p
a
t
t
e
r
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
T
h
e
 
g
r
o
w
-
s
h
r
i
n
k
 
l
o
o
p
"
,
 
b
o
d
y
:
 
"
R
i
g
h
t
 
p
o
i
n
t
e
r
 
e
x
t
e
n
d
s
 
b
y
 
1
 
e
a
c
h
 
o
u
t
e
r
 
i
t
e
r
a
t
i
o
n
.
 
I
f
 
t
h
e
 
w
i
n
d
o
w
 
n
o
w
 
v
i
o
l
a
t
e
s
 
t
h
e
 
i
n
v
a
r
i
a
n
t
 
(
d
u
p
l
i
c
a
t
e
 
c
h
a
r
,
 
s
u
m
 
o
v
e
r
 
b
u
d
g
e
t
,
 
m
o
r
e
 
t
h
a
n
 
k
 
d
i
s
t
i
n
c
t
 
c
h
a
r
s
)
,
 
t
h
e
 
l
e
f
t
 
p
o
i
n
t
e
r
 
a
d
v
a
n
c
e
s
 
u
n
t
i
l
 
t
h
e
 
i
n
v
a
r
i
a
n
t
 
i
s
 
r
e
s
t
o
r
e
d
.
 
E
v
e
r
y
 
i
n
d
e
x
 
i
s
 
v
i
s
i
t
e
d
 
a
t
 
m
o
s
t
 
t
w
i
c
e
,
 
g
i
v
i
n
g
 
O
(
n
)
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
T
h
e
 
s
t
a
t
e
 
y
o
u
 
m
u
s
t
 
t
r
a
c
k
"
,
 
b
o
d
y
:
 
"
A
 
h
a
s
h
 
m
a
p
 
(
c
h
a
r
a
c
t
e
r
 
f
r
e
q
u
e
n
c
y
,
 
s
u
m
,
 
c
o
u
n
t
 
o
f
 
d
i
s
t
i
n
c
t
)
 
t
h
a
t
 
u
p
d
a
t
e
s
 
i
n
 
O
(
1
)
 
w
h
e
n
 
r
i
g
h
t
 
a
d
d
s
 
a
 
c
h
a
r
 
a
n
d
 
w
h
e
n
 
l
e
f
t
 
r
e
m
o
v
e
s
 
o
n
e
.
 
T
h
i
s
 
a
u
x
i
l
i
a
r
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
 
i
s
 
w
h
a
t
 
l
e
t
s
 
'
c
h
e
c
k
 
t
h
e
 
c
o
n
d
i
t
i
o
n
'
 
s
t
a
y
 
c
o
n
s
t
a
n
t
-
t
i
m
e
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
C
l
a
s
s
i
c
 
v
a
r
i
a
n
t
s
"
,
 
b
o
d
y
:
 
"
L
o
n
g
e
s
t
 
s
u
b
s
t
r
i
n
g
 
w
i
t
h
o
u
t
 
r
e
p
e
a
t
s
,
 
m
i
n
i
m
u
m
 
w
i
n
d
o
w
 
s
u
b
s
t
r
i
n
g
 
(
L
e
e
t
c
o
d
e
 
h
a
r
d
)
,
 
l
o
n
g
e
s
t
 
s
u
b
s
t
r
i
n
g
 
w
i
t
h
 
a
t
 
m
o
s
t
 
k
 
d
i
s
t
i
n
c
t
,
 
s
m
a
l
l
e
s
t
 
s
u
b
a
r
r
a
y
 
w
i
t
h
 
s
u
m
 
>
=
 
S
,
 
f
r
u
i
t
 
i
n
t
o
 
b
a
s
k
e
t
s
,
 
p
e
r
m
u
t
a
t
i
o
n
-
i
n
-
s
t
r
i
n
g
.
 
S
a
m
e
 
s
k
e
l
e
t
o
n
,
 
d
i
f
f
e
r
e
n
t
 
i
n
v
a
r
i
a
n
t
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
s
l
i
d
i
n
g
 
w
i
n
d
o
w
,
 
a
d
v
a
n
c
e
d
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
w
o
 
p
o
i
n
t
e
r
s
,
 
o
n
e
 
m
o
v
i
n
g
 
p
a
t
t
e
r
n
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


 
 
 
 
 
 
 
 
 
 
I
m
a
g
i
n
e
 
a
 
r
u
b
b
e
r
 
b
a
n
d
 
s
t
r
e
t
c
h
e
d
 
a
c
r
o
s
s
 
t
w
o
 
f
i
n
g
e
r
s
 
o
n
 
a
 
r
o
w
 
o
f
 
b
e
a
d
s
.
 
T
h
e
 
r
i
g
h
t
 
f
i
n
g
e
r
 
a
d
v
a
n
c
e
s
 
b
e
a
d
-
b
y
-
b
e
a
d
;
 
w
h
e
n
e
v
e
r
 
t
h
e
 
b
e
a
d
s
 
i
n
s
i
d
e
 
t
h
e
 
b
a
n
d
 
b
r
e
a
k
 
a
 
r
u
l
e
,
 
t
h
e
 
l
e
f
t
 
f
i
n
g
e
r
 
c
a
t
c
h
e
s
 
u
p
 
u
n
t
i
l
 
t
h
e
 
r
u
l
e
 
i
s
 
r
e
s
t
o
r
e
d
.
 
T
h
e
 
b
a
n
d
 
i
s
 
y
o
u
r
 
w
i
n
d
o
w
 
o
f
 
v
a
l
i
d
i
t
y
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
 
'
L
o
n
g
e
s
t
 
u
n
i
q
u
e
 
s
u
b
s
t
r
i
n
g
 
o
f
 
"
a
b
b
a
"
.
'
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
 
'
L
o
n
g
e
s
t
 
u
n
i
q
u
e
 
s
u
b
s
t
r
i
n
g
 
o
f
 
"
t
m
m
z
u
x
t
"
.
'
,
 
a
:
 
"
5
"
 
}
,


 
 
 
 
{
 
q
:
 
'
F
o
r
 
"
a
a
b
a
c
b
e
b
e
b
e
"
,
 
l
e
n
g
t
h
 
o
f
 
l
o
n
g
e
s
t
 
s
u
b
s
t
r
i
n
g
 
w
i
t
h
 
e
x
a
c
t
l
y
 
3
 
d
i
s
t
i
n
c
t
 
c
h
a
r
s
?
'
,
 
a
:
 
"
7
"
 
}
,


 
 
 
 
{
 
q
:
 
"
S
m
a
l
l
e
s
t
 
s
u
b
a
r
r
a
y
 
l
e
n
g
t
h
 
w
i
t
h
 
s
u
m
 
>
=
 
1
1
 
f
r
o
m
 
[
1
,
4
,
4
,
2
,
3
,
2
]
.
"
,
 
a
:
 
"
3
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


 
 
 
 
 
 
 
 
T
r
a
c
e
 
t
h
e
 
w
i
n
d
o
w
 
m
e
n
t
a
l
l
y
:
 
s
t
a
r
t
 
w
i
t
h
 
l
e
f
t
 
=
 
r
i
g
h
t
 
=
 
0
,
 
g
r
o
w
 
r
i
g
h
t
,
 
s
h
r
i
n
k
 
l
e
f
t
 
w
h
e
n
 
t
h
e
 
i
n
v
a
r
i
a
n
t
 
b
r
e
a
k
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
W
h
y
 
i
t
 
i
s
 
O
(
n
)
,
 
n
o
t
 
O
(
n
²
)
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


 
 
 
 
 
 
 
 
 
 
T
h
e
 
i
n
n
e
r
 
<
I
n
l
i
n
e
C
o
d
e
>
w
h
i
l
e
<
/
I
n
l
i
n
e
C
o
d
e
>
 
l
o
o
p
 
l
o
o
k
s
 
s
c
a
r
y
,
 
b
u
t
 
<
I
n
l
i
n
e
C
o
d
e
>
l
e
f
t
<
/
I
n
l
i
n
e
C
o
d
e
>
 
o
n
l
y
 
e
v
e
r
 
m
o
v
e
s
 
f
o
r
w
a
r
d
,
 
n
e
v
e
r
 
r
e
s
e
t
.
 
A
c
r
o
s
s
 
t
h
e
 
w
h
o
l
e
 
s
c
a
n
,
 
<
I
n
l
i
n
e
C
o
d
e
>
l
e
f
t
<
/
I
n
l
i
n
e
C
o
d
e
>
 
a
d
v
a
n
c
e
s
 
a
t
 
m
o
s
t
 
n
 
t
i
m
e
s
,
 
<
I
n
l
i
n
e
C
o
d
e
>
r
i
g
h
t
<
/
I
n
l
i
n
e
C
o
d
e
>
 
a
d
v
a
n
c
e
s
 
a
t
 
m
o
s
t
 
n
 
t
i
m
e
s
.
 
T
o
t
a
l
 
w
o
r
k
 
i
s
 
2
n
,
 
n
o
t
 
n
 
x
 
n
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
I
n
t
e
r
v
i
e
w
 
p
l
a
y
b
o
o
k
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
u
l
 
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
l
i
s
t
-
d
i
s
c
 
p
l
-
5
 
s
p
a
c
e
-
y
-
1
 
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


 
 
 
 
 
 
 
 
 
 
<
l
i
>
I
d
e
n
t
i
f
y
 
t
h
e
 
i
n
v
a
r
i
a
n
t
 
(
"
a
l
l
 
c
h
a
r
s
 
u
n
i
q
u
e
"
,
 
"
s
u
m
 
&
l
t
;
=
 
k
"
)
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
P
i
c
k
 
a
 
s
t
a
t
e
 
s
u
m
m
a
r
y
 
t
h
a
t
 
u
p
d
a
t
e
s
 
i
n
 
O
(
1
)
 
w
h
e
n
 
r
i
g
h
t
 
a
d
d
s
 
/
 
l
e
f
t
 
r
e
m
o
v
e
s
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
O
u
t
e
r
 
l
o
o
p
:
 
r
i
g
h
t
 
0
.
.
n
-
1
.
 
I
n
n
e
r
 
w
h
i
l
e
:
 
s
h
r
i
n
k
 
u
n
t
i
l
 
i
n
v
a
r
i
a
n
t
 
r
e
s
t
o
r
e
d
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
U
p
d
a
t
e
 
t
h
e
 
b
e
s
t
 
a
n
s
w
e
r
 
a
f
t
e
r
 
e
v
e
r
y
 
v
a
l
i
d
 
e
x
t
e
n
s
i
o
n
.
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
u
l
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
I
n
t
e
r
v
i
e
w
 
t
r
a
p
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


 
 
 
 
 
 
 
 
 
 
M
a
n
y
 
s
t
u
d
e
n
t
s
 
c
o
u
n
t
 
t
h
e
 
w
o
r
s
t
 
c
a
s
e
 
a
s
 
O
(
n
²
)
 
b
y
 
m
u
l
t
i
p
l
y
i
n
g
 
o
u
t
e
r
 
a
n
d
 
i
n
n
e
r
 
l
o
o
p
s
.
 
A
m
o
r
t
i
z
e
d
 
a
n
a
l
y
s
i
s
 
(
p
o
i
n
t
e
r
 
n
e
v
e
r
 
d
e
c
r
e
a
s
e
s
)
 
g
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
 
O
(
n
)
.
 
B
e
 
r
e
a
d
y
 
t
o
 
j
u
s
t
i
f
y
 
t
h
i
s
 
o
u
t
 
l
o
u
d
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
S
l
i
d
i
n
g
W
i
n
d
o
w
A
d
v
a
n
c
e
d
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
W
h
a
t
 
i
s
 
t
h
e
 
t
i
m
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
 
t
h
e
 
s
l
i
d
i
n
g
-
w
i
n
d
o
w
 
l
o
n
g
e
s
t
-
u
n
i
q
u
e
-
s
u
b
s
t
r
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
 
o
n
 
a
 
s
t
r
i
n
g
 
o
f
 
l
e
n
g
t
h
 
n
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
n
 
l
o
g
 
n
)
"
,
 
"
O
(
n
²
)
"
,
 
"
O
(
n
)
 
-
 
a
m
o
r
t
i
z
e
d
,
 
e
a
c
h
 
p
o
i
n
t
e
r
 
m
o
v
e
s
 
a
t
 
m
o
s
t
 
n
 
t
i
m
e
s
"
,
 
"
O
(
n
 
*
 
2
6
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
l
e
f
t
 
a
n
d
 
r
i
g
h
t
 
e
a
c
h
 
a
d
v
a
n
c
e
 
a
t
 
m
o
s
t
 
n
 
s
t
e
p
s
 
i
n
 
t
o
t
a
l
.
 
T
h
e
 
i
n
n
e
r
 
w
h
i
l
e
 
d
o
e
s
 
n
o
t
 
r
e
s
t
a
r
t
 
l
e
f
t
 
-
 
s
o
 
t
h
e
 
t
o
t
a
l
 
w
o
r
k
 
i
s
 
O
(
n
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
Y
o
u
 
a
r
e
 
s
o
l
v
i
n
g
 
'
l
o
n
g
e
s
t
 
s
u
b
s
t
r
i
n
g
 
w
i
t
h
 
a
t
 
m
o
s
t
 
k
 
d
i
s
t
i
n
c
t
 
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
.
'
 
W
h
e
n
 
d
o
e
s
 
t
h
e
 
w
i
n
d
o
w
 
s
h
r
i
n
k
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
E
v
e
r
y
 
i
t
e
r
a
t
i
o
n
,
 
t
o
 
k
e
e
p
 
s
i
z
e
 
c
o
n
s
t
a
n
t
"
,


 
 
 
 
 
 
 
 
"
W
h
e
n
 
t
h
e
 
c
o
u
n
t
 
o
f
 
d
i
s
t
i
n
c
t
 
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
 
i
n
s
i
d
e
 
e
x
c
e
e
d
s
 
k
"
,


 
 
 
 
 
 
 
 
"
W
h
e
n
 
t
h
e
 
c
u
r
r
e
n
t
 
c
h
a
r
a
c
t
e
r
 
i
s
 
a
 
v
o
w
e
l
"
,


 
 
 
 
 
 
 
 
"
O
n
l
y
 
a
t
 
t
h
e
 
e
n
d
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
T
h
e
 
i
n
v
a
r
i
a
n
t
 
i
s
 
'
a
t
 
m
o
s
t
 
k
 
d
i
s
t
i
n
c
t
'
.
 
W
h
i
l
e
 
d
i
s
t
i
n
c
t
C
o
u
n
t
 
>
 
k
,
 
a
d
v
a
n
c
e
 
l
e
f
t
 
(
d
e
c
r
e
m
e
n
t
i
n
g
 
f
r
e
q
)
 
u
n
t
i
l
 
d
i
s
t
i
n
c
t
C
o
u
n
t
 
<
=
 
k
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
-
w
i
n
d
o
w
-
s
u
b
s
t
r
i
n
g
 
p
r
o
b
l
e
m
,
 
w
h
y
 
d
o
 
w
e
 
k
e
e
p
 
a
 
'
m
a
t
c
h
e
d
'
 
c
o
u
n
t
e
r
 
i
n
s
t
e
a
d
 
o
f
 
c
o
m
p
a
r
i
n
g
 
m
a
p
s
 
e
v
e
r
y
 
s
t
e
p
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
M
a
p
s
 
c
a
n
n
o
t
 
b
e
 
c
o
m
p
a
r
e
d
 
i
n
 
J
a
v
a
S
c
r
i
p
t
"
,


 
 
 
 
 
 
 
 
"
T
o
 
t
u
r
n
 
e
a
c
h
 
a
d
d
/
r
e
m
o
v
e
 
i
n
t
o
 
O
(
1
)
 
i
n
s
t
e
a
d
 
o
f
 
O
(
|
a
l
p
h
a
b
e
t
|
)
"
,


 
 
 
 
 
 
 
 
"
B
e
c
a
u
s
e
 
t
h
e
 
w
i
n
d
o
w
 
i
s
 
a
l
w
a
y
s
 
s
i
z
e
 
2
6
"
,


 
 
 
 
 
 
 
 
"
I
t
 
h
a
s
 
n
o
 
e
f
f
e
c
t
 
o
n
 
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
a
i
n
t
a
i
n
i
n
g
 
a
 
c
o
u
n
t
e
r
 
o
f
 
a
l
r
e
a
d
y
-
m
a
t
c
h
e
d
 
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
 
l
e
t
s
 
e
a
c
h
 
s
t
e
p
 
u
p
d
a
t
e
 
s
t
a
t
e
 
i
n
 
O
(
1
)
.
 
C
o
m
p
a
r
i
n
g
 
f
u
l
l
 
m
a
p
s
 
p
e
r
 
s
t
e
p
 
w
o
u
l
d
 
b
e
 
O
(
|
a
l
p
h
a
b
e
t
|
)
 
p
e
r
 
s
t
e
p
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
F
o
r
 
i
n
p
u
t
 
\
"
p
w
w
k
e
w
\
"
,
 
a
f
t
e
r
 
t
h
e
 
f
i
r
s
t
 
d
u
p
l
i
c
a
t
e
 
(
'
w
'
 
a
t
 
i
n
d
e
x
 
2
)
 
a
p
p
e
a
r
s
,
 
w
h
e
r
e
 
d
o
e
s
 
l
e
f
t
 
l
a
n
d
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
0
"
,
 
"
1
"
,
 
"
2
"
,
 
"
3
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
W
h
e
n
 
r
i
g
h
t
=
2
 
s
e
e
s
 
'
w
'
 
(
f
r
e
q
=
2
)
,
 
w
e
 
d
r
o
p
 
s
[
0
]
=
'
p
'
 
(
l
e
f
t
=
1
)
 
-
 
s
t
i
l
l
 
f
r
e
q
[
'
w
'
]
=
2
,
 
d
r
o
p
 
s
[
1
]
=
'
w
'
 
(
l
e
f
t
=
2
)
 
-
 
n
o
w
 
f
r
e
q
[
'
w
'
]
=
1
,
 
i
n
v
a
r
i
a
n
t
 
r
e
s
t
o
r
e
d
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
S
l
i
d
i
n
g
 
W
i
n
d
o
w
 
(
A
d
v
a
n
c
e
d
)
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
3
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
 
t
h
e
 
#
1
 
s
t
r
i
n
g
-
s
u
b
a
r
r
a
y
 
p
a
t
t
e
r
n
 
i
n
 
i
n
t
e
r
v
i
e
w
s
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


