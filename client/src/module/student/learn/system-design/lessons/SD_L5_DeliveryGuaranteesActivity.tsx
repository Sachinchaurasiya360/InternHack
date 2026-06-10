
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
 
t
y
p
e
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
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
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
,
 
m
o
t
i
o
n
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
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
h
e
c
k
C
i
r
c
l
e
2
,
 
G
l
o
b
e
,
 
S
e
n
d
,
 
S
h
i
e
l
d
C
h
e
c
k
 
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
 
E
n
g
i
n
e
e
r
i
n
g
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
 
f
r
o
m
 
"
@
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
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
 
t
y
p
e
 
{
 
E
n
g
T
a
b
D
e
f
,
 
E
n
g
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
 
}
 
f
r
o
m
 
"
@
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
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




c
o
n
s
t
 
S
D
 
=
 
"
#
8
4
c
c
1
6
"
;


c
o
n
s
t
 
N
E
U
T
R
A
L
 
=
 
"
#
6
4
7
4
8
b
"
;


c
o
n
s
t
 
W
A
R
N
 
=
 
"
#
f
5
9
e
0
b
"
;


c
o
n
s
t
 
P
U
R
P
L
E
 
=
 
"
#
8
b
5
c
f
6
"
;


c
o
n
s
t
 
M
O
N
O
 
=
 
'
"
J
e
t
B
r
a
i
n
s
 
M
o
n
o
"
,
 
M
e
n
l
o
,
 
C
o
n
s
o
l
a
s
,
 
m
o
n
o
s
p
a
c
e
'
;




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
T
i
t
l
e
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,


 
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
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
 
"
1
.
1
5
r
e
m
"
,


 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,


 
 
m
a
r
g
i
n
:
 
"
0
 
0
 
1
2
p
x
"
,


}
;


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
D
e
s
c
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
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
 
"
0
.
9
2
r
e
m
"
,


 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,


 
 
m
a
r
g
i
n
:
 
"
0
 
0
 
2
0
p
x
"
,


 
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
6
5
,


}
;




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
a
t
-
m
o
s
t
-
o
n
c
e
"
 
|
 
"
a
t
-
l
e
a
s
t
-
o
n
c
e
"
 
|
 
"
e
x
a
c
t
l
y
-
o
n
c
e
"
;




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
1
 
-
 
D
e
f
i
n
i
t
i
o
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




c
o
n
s
t
 
G
U
A
R
A
N
T
E
E
S
 
=
 
[


 
 
{


 
 
 
 
k
:
 
"
a
t
-
m
o
s
t
-
o
n
c
e
"
,


 
 
 
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
,


 
 
 
 
s
h
o
r
t
:
 
"
f
i
r
e
 
a
n
d
 
f
o
r
g
e
t
"
,


 
 
 
 
l
o
n
g
:
 
"
P
r
o
d
u
c
e
r
 
s
e
n
d
s
,
 
d
o
e
s
n
'
t
 
r
e
t
r
y
.
 
I
f
 
t
h
e
 
n
e
t
w
o
r
k
 
d
r
o
p
s
 
t
h
e
 
m
e
s
s
a
g
e
,
 
i
t
'
s
 
g
o
n
e
.
"
,


 
 
 
 
p
r
o
:
 
"
L
o
w
e
s
t
 
l
a
t
e
n
c
y
.
 
Z
e
r
o
 
o
v
e
r
h
e
a
d
.
"
,


 
 
 
 
c
o
n
:
 
"
D
a
t
a
 
l
o
s
s
 
i
s
 
a
c
c
e
p
t
a
b
l
e
.
"
,


 
 
 
 
e
x
:
 
"
R
e
a
l
-
t
i
m
e
 
m
e
t
r
i
c
s
,
 
e
p
h
e
m
e
r
a
l
 
l
o
g
s
,
 
f
i
r
e
-
a
n
d
-
f
o
r
g
e
t
 
t
e
l
e
m
e
t
r
y
.
"
,


 
 
}
,


 
 
{


 
 
 
 
k
:
 
"
a
t
-
l
e
a
s
t
-
o
n
c
e
"
,


 
 
 
 
c
o
l
o
r
:
 
W
A
R
N
,


 
 
 
 
s
h
o
r
t
:
 
"
r
e
t
r
y
 
u
n
t
i
l
 
a
c
k
"
,


 
 
 
 
l
o
n
g
:
 
"
P
r
o
d
u
c
e
r
 
r
e
t
r
i
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
 
b
r
o
k
e
r
 
a
c
k
s
.
 
T
h
e
 
s
a
m
e
 
m
e
s
s
a
g
e
 
m
a
y
 
b
e
 
d
e
l
i
v
e
r
e
d
 
m
u
l
t
i
p
l
e
 
t
i
m
e
s
.
"
,


 
 
 
 
p
r
o
:
 
"
N
o
 
d
a
t
a
 
l
o
s
s
.
"
,


 
 
 
 
c
o
n
:
 
"
D
u
p
l
i
c
a
t
e
s
 
d
o
w
n
s
t
r
e
a
m
.
 
C
o
n
s
u
m
e
r
 
m
u
s
t
 
b
e
 
i
d
e
m
p
o
t
e
n
t
 
o
r
 
i
t
'
l
l
 
a
c
t
 
o
n
 
t
h
e
 
s
a
m
e
 
f
a
c
t
 
t
w
i
c
e
.
"
,


 
 
 
 
e
x
:
 
"
M
o
s
t
 
p
r
o
d
u
c
t
i
o
n
 
m
e
s
s
a
g
e
 
s
y
s
t
e
m
s
 
d
e
f
a
u
l
t
 
t
o
 
t
h
i
s
.
"
,


 
 
}
,


 
 
{


 
 
 
 
k
:
 
"
e
x
a
c
t
l
y
-
o
n
c
e
"
,


 
 
 
 
c
o
l
o
r
:
 
S
D
,


 
 
 
 
s
h
o
r
t
:
 
"
n
o
 
l
o
s
s
,
 
n
o
 
d
u
p
s
"
,


 
 
 
 
l
o
n
g
:
 
"
P
r
o
d
u
c
e
r
 
+
 
b
r
o
k
e
r
 
+
 
c
o
n
s
u
m
e
r
 
c
o
o
p
e
r
a
t
e
 
s
o
 
e
a
c
h
 
m
e
s
s
a
g
e
 
i
s
 
p
r
o
c
e
s
s
e
d
 
e
x
a
c
t
l
y
 
o
n
c
e
.
 
B
u
i
l
t
 
o
n
 
a
t
-
l
e
a
s
t
-
o
n
c
e
 
+
 
d
e
d
u
p
e
.
"
,


 
 
 
 
p
r
o
:
 
"
C
l
e
a
n
e
s
t
 
s
e
m
a
n
t
i
c
s
 
f
o
r
 
t
h
e
 
c
o
n
s
u
m
e
r
.
"
,


 
 
 
 
c
o
n
:
 
"
H
i
g
h
e
r
 
o
v
e
r
h
e
a
d
,
 
r
e
q
u
i
r
e
s
 
i
d
e
m
p
o
t
e
n
t
 
p
r
o
d
u
c
e
r
 
+
 
t
r
a
n
s
a
c
t
i
o
n
a
l
 
w
r
i
t
e
s
.
"
,


 
 
 
 
e
x
:
 
"
K
a
f
k
a
 
w
i
t
h
 
i
d
e
m
p
o
t
e
n
t
 
p
r
o
d
u
c
e
r
 
+
 
t
r
a
n
s
a
c
t
i
o
n
s
;
 
S
t
r
i
p
e
 
c
h
a
r
g
e
s
 
w
i
t
h
 
i
d
e
m
p
o
t
e
n
c
y
 
k
e
y
s
.
"
,


 
 
}
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
 
D
e
f
i
n
i
t
i
o
n
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
T
h
r
e
e
 
g
u
a
r
a
n
t
e
e
s
.
 
N
o
n
e
 
o
f
 
t
h
e
m
 
a
r
e
 
f
r
e
e
.
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
W
h
e
n
 
a
 
m
e
s
s
a
g
e
 
b
u
s
 
d
e
l
i
v
e
r
s
 
a
 
m
e
s
s
a
g
e
,
 
i
t
 
m
a
k
e
s
 
a
 
p
r
o
m
i
s
e
 
a
b
o
u
t
 
h
o
w
 
r
e
l
i
a
b
l
y
.
 
T
h
e
 
t
h
r
e
e


 
 
 
 
 
 
 
 
c
a
n
o
n
i
c
a
l
 
p
r
o
m
i
s
e
s
 
t
r
a
d
e
 
l
a
t
e
n
c
y
 
f
o
r
 
r
e
l
i
a
b
i
l
i
t
y
.
 
M
o
s
t
 
p
r
o
d
u
c
t
i
o
n
 
s
y
s
t
e
m
s
 
a
r
e


 
 
 
 
 
 
 
 
<
b
>
 
a
t
-
l
e
a
s
t
-
o
n
c
e
 
w
i
t
h
 
i
d
e
m
p
o
t
e
n
t
 
c
o
n
s
u
m
e
r
s
<
/
b
>
,
 
w
h
i
c
h
 
i
s
 
t
h
e
 
p
r
a
c
t
i
c
a
l
 
e
q
u
i
v
a
l
e
n
t
 
o
f


 
 
 
 
 
 
 
 
e
x
a
c
t
l
y
-
o
n
c
e
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{
 
h
i
d
d
e
n
:
 
{
}
,
 
v
i
s
i
b
l
e
:
 
{
 
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
 
{
 
s
t
a
g
g
e
r
C
h
i
l
d
r
e
n
:
 
0
.
1
 
}
 
}
 
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
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
m
d
:
g
r
i
d
-
c
o
l
s
-
3
 
g
a
p
-
3
 
m
b
-
6
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
G
U
A
R
A
N
T
E
E
S
.
m
a
p
(
(
g
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
g
.
k
}


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{
 
h
i
d
d
e
n
:
 
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
0
 
}
,
 
v
i
s
i
b
l
e
:
 
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
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
 
{
 
d
u
r
a
t
i
o
n
:
 
0
.
5
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
 
}
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
6
p
x
 
1
8
p
x
"
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
g
.
c
o
l
o
r
}
5
5
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
 
1
0
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
 
`
$
{
g
.
c
o
l
o
r
}
0
8
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
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
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
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
 
"
0
.
9
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
g
.
c
o
l
o
r
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
4
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
.
k
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
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
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
 
"
0
.
7
r
e
m
"
,
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
,
 
f
o
n
t
S
t
y
l
e
:
 
"
i
t
a
l
i
c
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
.
s
h
o
r
t
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
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
4
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
 
}
}
>
{
g
.
l
o
n
g
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
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,
 
g
a
p
:
 
4
,
 
p
a
d
d
i
n
g
T
o
p
:
 
8
,
 
b
o
r
d
e
r
T
o
p
:
 
`
1
p
x
 
d
a
s
h
e
d
 
$
{
g
.
c
o
l
o
r
}
3
3
`
 
}
}
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
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
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
 
"
0
.
6
2
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
m
a
r
g
i
n
R
i
g
h
t
:
 
6
 
}
}
>
P
R
O
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
.
p
r
o
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
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
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
 
"
0
.
6
2
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
W
A
R
N
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
m
a
r
g
i
n
R
i
g
h
t
:
 
6
 
}
}
>
C
O
N
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
.
c
o
n
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
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
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
 
"
0
.
7
2
r
e
m
"
,
 
c
o
l
o
r
:
 
g
.
c
o
l
o
r
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
m
a
r
g
i
n
R
i
g
h
t
:
 
4
 
}
}
>
E
X
 
·
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
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>
{
g
.
e
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
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
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
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
2
 
-
 
F
a
i
l
u
r
e
-
i
n
j
e
c
t
i
o
n
 
s
a
n
d
b
o
x
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




t
y
p
e
 
E
v
e
n
t
K
i
n
d
 
=
 
"
d
e
l
i
v
e
r
e
d
"
 
|
 
"
d
u
p
l
i
c
a
t
e
"
 
|
 
"
d
r
o
p
p
e
d
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
 
D
e
l
i
v
e
r
y
E
v
e
n
t
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
k
i
n
d
:
 
E
v
e
n
t
K
i
n
d
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
 
S
a
n
d
b
o
x
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
a
t
-
l
e
a
s
t
-
o
n
c
e
"
)
;


 
 
c
o
n
s
t
 
[
r
u
n
n
i
n
g
,
 
s
e
t
R
u
n
n
i
n
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
e
v
e
n
t
s
,
 
s
e
t
E
v
e
n
t
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
D
e
l
i
v
e
r
y
E
v
e
n
t
[
]
>
(
[
]
)
;


 
 
c
o
n
s
t
 
[
d
e
l
i
v
e
r
e
d
,
 
s
e
t
D
e
l
i
v
e
r
e
d
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
0
)
;


 
 
c
o
n
s
t
 
[
d
u
p
l
i
c
a
t
e
s
,
 
s
e
t
D
u
p
l
i
c
a
t
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
(
0
)
;


 
 
c
o
n
s
t
 
[
d
r
o
p
p
e
d
,
 
s
e
t
D
r
o
p
p
e
d
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
0
)
;




 
 
c
o
n
s
t
 
r
e
s
e
t
 
=
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
E
v
e
n
t
s
(
[
]
)
;


 
 
 
 
s
e
t
D
e
l
i
v
e
r
e
d
(
0
)
;


 
 
 
 
s
e
t
D
u
p
l
i
c
a
t
e
s
(
0
)
;


 
 
 
 
s
e
t
D
r
o
p
p
e
d
(
0
)
;


 
 
 
 
s
e
t
R
u
n
n
i
n
g
(
f
a
l
s
e
)
;


 
 
}
;




 
 
c
o
n
s
t
 
s
e
n
d
5
 
=
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
E
v
e
n
t
s
(
[
]
)
;


 
 
 
 
s
e
t
D
e
l
i
v
e
r
e
d
(
0
)
;


 
 
 
 
s
e
t
D
u
p
l
i
c
a
t
e
s
(
0
)
;


 
 
 
 
s
e
t
D
r
o
p
p
e
d
(
0
)
;


 
 
 
 
s
e
t
R
u
n
n
i
n
g
(
t
r
u
e
)
;




 
 
 
 
/
/
 
S
c
r
i
p
t
e
d
 
5
 
s
e
n
d
s
 
w
i
t
h
 
2
 
i
n
d
u
c
e
d
 
f
a
i
l
u
r
e
s


 
 
 
 
c
o
n
s
t
 
s
c
r
i
p
t
:
 
{
 
i
d
:
 
n
u
m
b
e
r
;
 
n
e
t
w
o
r
k
D
r
o
p
:
 
b
o
o
l
e
a
n
 
}
[
]
 
=
 
[


 
 
 
 
 
 
{
 
i
d
:
 
1
,
 
n
e
t
w
o
r
k
D
r
o
p
:
 
f
a
l
s
e
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
2
,
 
n
e
t
w
o
r
k
D
r
o
p
:
 
t
r
u
e
 
}
,
 
/
/
 
a
c
k
 
d
r
o
p
s
 
o
n
 
t
h
e
 
w
a
y
 
b
a
c
k


 
 
 
 
 
 
{
 
i
d
:
 
3
,
 
n
e
t
w
o
r
k
D
r
o
p
:
 
f
a
l
s
e
 
}
,


 
 
 
 
 
 
{
 
i
d
:
 
4
,
 
n
e
t
w
o
r
k
D
r
o
p
:
 
t
r
u
e
 
}
,
 
/
/
 
a
c
k
 
d
r
o
p
s


 
 
 
 
 
 
{
 
i
d
:
 
5
,
 
n
e
t
w
o
r
k
D
r
o
p
:
 
f
a
l
s
e
 
}
,


 
 
 
 
]
;




 
 
 
 
s
c
r
i
p
t
.
f
o
r
E
a
c
h
(
(
s
t
e
p
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
i
f
 
(
m
o
d
e
 
=
=
=
 
"
a
t
-
m
o
s
t
-
o
n
c
e
"
)
 
{


 
 
 
 
 
 
 
 
 
 
/
/
 
P
r
o
d
u
c
e
r
 
f
i
r
e
s
,
 
n
o
 
r
e
t
r
y
;
 
b
r
o
k
e
r
 
m
a
y
 
o
r
 
m
a
y
 
n
o
t
 
d
e
l
i
v
e
r


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
r
o
p
 
=
 
s
t
e
p
.
n
e
t
w
o
r
k
D
r
o
p
;


 
 
 
 
 
 
 
 
 
 
s
e
t
E
v
e
n
t
s
(
(
e
s
)
 
=
>
 
[
.
.
.
e
s
,
 
{
 
i
d
:
 
s
t
e
p
.
i
d
,
 
k
i
n
d
:
 
d
r
o
p
 
?
 
"
d
r
o
p
p
e
d
"
 
:
 
"
d
e
l
i
v
e
r
e
d
"
 
}
]
)
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
d
r
o
p
)
 
s
e
t
D
r
o
p
p
e
d
(
(
d
)
 
=
>
 
d
 
+
 
1
)
;


 
 
 
 
 
 
 
 
 
 
e
l
s
e
 
s
e
t
D
e
l
i
v
e
r
e
d
(
(
d
)
 
=
>
 
d
 
+
 
1
)
;


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
m
o
d
e
 
=
=
=
 
"
a
t
-
l
e
a
s
t
-
o
n
c
e
"
)
 
{


 
 
 
 
 
 
 
 
 
 
/
/
 
F
i
r
s
t
 
a
t
t
e
m
p
t
;
 
i
f
 
a
c
k
 
d
r
o
p
p
e
d
,
 
r
e
t
r
y
 
→
 
d
u
p
l
i
c
a
t
e


 
 
 
 
 
 
 
 
 
 
s
e
t
E
v
e
n
t
s
(
(
e
s
)
 
=
>
 
[
.
.
.
e
s
,
 
{
 
i
d
:
 
s
t
e
p
.
i
d
,
 
k
i
n
d
:
 
"
d
e
l
i
v
e
r
e
d
"
 
}
]
)
;


 
 
 
 
 
 
 
 
 
 
s
e
t
D
e
l
i
v
e
r
e
d
(
(
d
)
 
=
>
 
d
 
+
 
1
)
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
s
t
e
p
.
n
e
t
w
o
r
k
D
r
o
p
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
E
v
e
n
t
s
(
(
e
s
)
 
=
>
 
[
.
.
.
e
s
,
 
{
 
i
d
:
 
s
t
e
p
.
i
d
,
 
k
i
n
d
:
 
"
d
u
p
l
i
c
a
t
e
"
 
}
]
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
D
u
p
l
i
c
a
t
e
s
(
(
d
)
 
=
>
 
d
 
+
 
1
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
,
 
2
5
0
)
;


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
 
 
/
/
 
e
x
a
c
t
l
y
-
o
n
c
e
:
 
i
d
e
m
p
o
t
e
n
t
 
p
r
o
d
u
c
e
r
 
d
e
d
u
p
e
s
 
b
y
 
s
e
q
u
e
n
c
e
 
n
u
m
b
e
r


 
 
 
 
 
 
 
 
 
 
s
e
t
E
v
e
n
t
s
(
(
e
s
)
 
=
>
 
[
.
.
.
e
s
,
 
{
 
i
d
:
 
s
t
e
p
.
i
d
,
 
k
i
n
d
:
 
"
d
e
l
i
v
e
r
e
d
"
 
}
]
)
;


 
 
 
 
 
 
 
 
 
 
s
e
t
D
e
l
i
v
e
r
e
d
(
(
d
)
 
=
>
 
d
 
+
 
1
)
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
s
t
e
p
.
n
e
t
w
o
r
k
D
r
o
p
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
/
/
 
r
e
t
r
y
 
h
a
p
p
e
n
s
 
b
u
t
 
i
s
 
d
e
d
u
p
e
d
 
b
y
 
b
r
o
k
e
r
 
v
i
a
 
p
r
o
d
u
c
e
r
 
I
D
 
+
 
s
e
q


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
E
v
e
n
t
s
(
(
e
s
)
 
=
>
 
[
.
.
.
e
s
,
 
{
 
i
d
:
 
s
t
e
p
.
i
d
,
 
k
i
n
d
:
 
"
d
u
p
l
i
c
a
t
e
"
 
}
]
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
/
 
d
u
p
l
i
c
a
t
e
 
i
s
 
d
e
t
e
c
t
e
d
 
a
n
d
 
d
r
o
p
p
e
d
 
a
t
 
t
h
e
 
b
r
o
k
e
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
E
v
e
n
t
s
(
(
e
s
)
 
=
>
 
e
s
.
f
i
l
t
e
r
(
(
e
v
)
 
=
>
 
!
(
e
v
.
i
d
 
=
=
=
 
s
t
e
p
.
i
d
 
&
&
 
e
v
.
k
i
n
d
 
=
=
=
 
"
d
u
p
l
i
c
a
t
e
"
)
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
,
 
6
0
0
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
,
 
2
5
0
)
;


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
}




 
 
 
 
 
 
 
 
i
f
 
(
i
 
=
=
=
 
s
c
r
i
p
t
.
l
e
n
g
t
h
 
-
 
1
)
 
{


 
 
 
 
 
 
 
 
 
 
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
 
s
e
t
R
u
n
n
i
n
g
(
f
a
l
s
e
)
,
 
1
2
0
0
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}
,
 
i
 
*
 
7
0
0
)
;


 
 
 
 
}
)
;


 
 
}
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
S
e
n
d
 
5
 
m
e
s
s
a
g
e
s
.
 
T
w
o
 
o
f
 
t
h
e
m
 
l
o
s
e
 
t
h
e
i
r
 
a
c
k
.
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
P
i
c
k
 
a
 
g
u
a
r
a
n
t
e
e
,
 
h
i
t
 
s
e
n
d
.
 
T
h
e
 
f
i
r
s
t
 
a
n
d
 
t
h
i
r
d
 
s
e
n
d
s
 
a
c
k
 
c
l
e
a
n
l
y
;
 
s
e
n
d
s
 
2
 
a
n
d
 
4
 
l
o
s
e


 
 
 
 
 
 
 
 
t
h
e
 
a
c
k
 
o
n
 
t
h
e
 
w
a
y
 
b
a
c
k
.
 
W
a
t
c
h
 
h
o
w
 
e
a
c
h
 
g
u
a
r
a
n
t
e
e
 
r
e
s
p
o
n
d
s
:
 
l
o
s
e
 
t
h
e
 
m
e
s
s
a
g
e
,
 
d
e
l
i
v
e
r


 
 
 
 
 
 
 
 
t
w
i
c
e
,
 
o
r
 
d
e
t
e
c
t
-
a
n
d
-
d
e
d
u
p
e
.


 
 
 
 
 
 
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
 
m
b
-
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
(
G
U
A
R
A
N
T
E
E
S
 
a
s
 
{
 
k
:
 
M
o
d
e
;
 
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
 
}
[
]
)
.
m
a
p
(
(
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
 
a
c
t
i
v
e
 
=
 
m
o
d
e
 
=
=
=
 
g
.
k
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
b
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
g
.
k
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
 
{
 
s
e
t
M
o
d
e
(
g
.
k
)
;
 
r
e
s
e
t
(
)
;
 
}
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
r
u
n
n
i
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
4
p
x
"
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
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
s
o
r
:
 
r
u
n
n
i
n
g
 
?
 
"
n
o
t
-
a
l
l
o
w
e
d
"
 
:
 
"
p
o
i
n
t
e
r
"
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
a
c
t
i
v
e
 
?
 
g
.
c
o
l
o
r
 
:
 
"
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
}
`
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
 
a
c
t
i
v
e
 
?
 
`
$
{
g
.
c
o
l
o
r
}
1
8
`
 
:
 
"
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
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
a
c
t
i
v
e
 
?
 
g
.
c
o
l
o
r
 
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
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
 
"
0
.
7
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
6
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
p
a
c
i
t
y
:
 
r
u
n
n
i
n
g
 
?
 
0
.
5
 
:
 
1
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
g
.
k
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
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
 
"
#
0
b
1
2
2
0
"
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
 
1
2
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
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
,


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
2
2
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
/
*
 
S
t
a
t
s
 
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
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
3
 
g
a
p
-
2
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
d
e
l
i
v
e
r
e
d
"
 
v
a
l
u
e
=
{
d
e
l
i
v
e
r
e
d
}
 
c
o
l
o
r
=
{
S
D
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
d
u
p
l
i
c
a
t
e
s
"
 
v
a
l
u
e
=
{
d
u
p
l
i
c
a
t
e
s
}
 
c
o
l
o
r
=
{
W
A
R
N
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
d
r
o
p
p
e
d
"
 
v
a
l
u
e
=
{
d
r
o
p
p
e
d
}
 
c
o
l
o
r
=
{
P
U
R
P
L
E
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
/
*
 
E
v
e
n
t
 
l
o
g
 
*
/
}


 
 
 
 
 
 
 
 
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
 
2
4
0
,
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
"
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
 
"
r
g
b
a
(
1
5
,
2
3
,
4
2
,
0
.
6
)
"
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
 
8
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
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
 
}
}
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
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
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
 
"
0
.
6
6
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
C
O
N
S
U
M
E
R
 
L
O
G


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
{
e
v
e
n
t
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
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
 
"
0
.
7
8
r
e
m
"
,
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
,
 
f
o
n
t
S
t
y
l
e
:
 
"
i
t
a
l
i
c
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
s
s
 
&
l
d
q
u
o
;
s
e
n
d
 
5
 
m
e
s
s
a
g
e
s
&
r
d
q
u
o
;
 
t
o
 
s
e
e
 
t
h
e
 
c
o
n
s
u
m
e
r
&
r
s
q
u
o
;
s
 
v
i
e
w


 
 
 
 
 
 
 
 
 
 
 
 
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
f
l
e
x
"
,
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,
 
g
a
p
:
 
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
v
e
n
t
s
.
m
a
p
(
(
e
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
 
=
 
e
.
k
i
n
d
 
=
=
=
 
"
d
e
l
i
v
e
r
e
d
"
 
?
 
S
D
 
:
 
e
.
k
i
n
d
 
=
=
=
 
"
d
u
p
l
i
c
a
t
e
"
 
?
 
W
A
R
N
 
:
 
P
U
R
P
L
E
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
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
e
.
i
d
}
-
$
{
i
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
x
:
 
-
1
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
x
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
x
:
 
1
0
 
}
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
3
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
"
6
0
p
x
 
1
f
r
 
1
3
0
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
1
2
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
6
p
x
 
1
0
p
x
"
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
 
`
$
{
c
}
1
0
`
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
}
3
3
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
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
 
"
0
.
7
4
r
e
m
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
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
c
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
6
e
m
"
 
}
}
>
M
S
G
 
#
{
e
.
i
d
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
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
.
k
i
n
d
 
=
=
=
 
"
d
e
l
i
v
e
r
e
d
"
 
?
 
"
→
 
p
r
o
c
e
s
s
e
d
"
 
:
 
e
.
k
i
n
d
 
=
=
=
 
"
d
u
p
l
i
c
a
t
e
"
 
?
 
"
↻
 
d
u
p
l
i
c
a
t
e
 
r
e
c
e
i
v
e
d
"
 
:
 
"
✕
 
n
e
v
e
r
 
a
r
r
i
v
e
d
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
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
c
,
 
t
e
x
t
A
l
i
g
n
:
 
"
r
i
g
h
t
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
 
}
}
>
{
e
.
k
i
n
d
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
m
o
t
i
o
n
.
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
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
 
 
 
 
 
 
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
 
m
t
-
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


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
5
 
}
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
s
e
n
d
5
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
r
u
n
n
i
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
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
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
4
p
x
"
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
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
s
o
r
:
 
r
u
n
n
i
n
g
 
?
 
"
n
o
t
-
a
l
l
o
w
e
d
"
 
:
 
"
p
o
i
n
t
e
r
"
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
r
u
n
n
i
n
g
 
?
 
"
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
2
5
)
"
 
:
 
S
D
}
`
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
 
r
u
n
n
i
n
g
 
?
 
"
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
"
 
:
 
`
$
{
S
D
}
1
8
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
r
u
n
n
i
n
g
 
?
 
N
E
U
T
R
A
L
 
:
 
S
D
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
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
 
"
0
.
7
2
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
u
p
p
e
r
c
a
s
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
p
a
c
i
t
y
:
 
r
u
n
n
i
n
g
 
?
 
0
.
5
 
:
 
1
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
n
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
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
s
e
n
d
 
5
 
m
e
s
s
a
g
e
s


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
5
 
}
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
r
e
s
e
t
}


 
 
 
 
 
 
 
 
 
 
 
 
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
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
4
p
x
"
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
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
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
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
2
5
)
"
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
 
"
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
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
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
 
"
0
.
7
2
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
u
p
p
e
r
c
a
s
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
r
e
s
e
t


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
b
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
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
m
o
d
e
=
"
w
a
i
t
"
>


 
 
 
 
 
 
 
 
 
 
{
!
r
u
n
n
i
n
g
 
&
&
 
e
v
e
n
t
s
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
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
m
o
d
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
8
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
-
8
 
}
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
3
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
a
r
g
i
n
T
o
p
:
 
1
4
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
"
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
 
`
$
{
S
D
}
1
4
`
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
S
D
}
5
5
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
 
8
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
 
"
0
.
8
6
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
i
g
n
I
t
e
m
s
:
 
"
f
l
e
x
-
s
t
a
r
t
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
e
x
a
c
t
l
y
-
o
n
c
e
"
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
C
i
r
c
l
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
5
 
h
-
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
 
c
o
l
o
r
:
 
S
D
,
 
f
l
e
x
S
h
r
i
n
k
:
 
0
,
 
m
a
r
g
i
n
T
o
p
:
 
2
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
h
i
e
l
d
C
h
e
c
k
 
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
5
 
h
-
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
 
c
o
l
o
r
:
 
W
A
R
N
,
 
f
l
e
x
S
h
r
i
n
k
:
 
0
,
 
m
a
r
g
i
n
T
o
p
:
 
2
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
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
 
"
0
.
6
6
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
E
S
U
L
T


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
 
m
a
r
g
i
n
T
o
p
:
 
4
 
}
}
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
a
t
-
m
o
s
t
-
o
n
c
e
"
 
&
&
 
`
$
{
d
r
o
p
p
e
d
}
 
m
e
s
s
a
g
e
s
 
w
e
r
e
 
s
i
l
e
n
t
l
y
 
l
o
s
t
.
 
T
h
e
 
c
o
n
s
u
m
e
r
 
n
e
v
e
r
 
s
a
w
 
t
h
e
m
.
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
a
t
-
l
e
a
s
t
-
o
n
c
e
"
 
&
&
 
`
E
v
e
r
y
 
m
e
s
s
a
g
e
 
a
r
r
i
v
e
d
,
 
b
u
t
 
$
{
d
u
p
l
i
c
a
t
e
s
}
 
w
e
r
e
 
d
e
l
i
v
e
r
e
d
 
t
w
i
c
e
.
 
T
h
e
 
c
o
n
s
u
m
e
r
 
m
u
s
t
 
d
e
d
u
p
e
 
(
e
.
g
.
,
 
b
y
 
m
e
s
s
a
g
e
 
I
D
)
.
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
e
x
a
c
t
l
y
-
o
n
c
e
"
 
&
&
 
"
I
d
e
m
p
o
t
e
n
t
 
p
r
o
d
u
c
e
r
 
d
e
t
e
c
t
e
d
 
t
h
e
 
r
e
t
r
y
 
a
t
t
e
m
p
t
s
 
a
n
d
 
t
h
e
 
b
r
o
k
e
r
 
d
r
o
p
p
e
d
 
t
h
e
 
d
u
p
l
i
c
a
t
e
s
.
 
C
o
n
s
u
m
e
r
 
s
a
w
 
e
a
c
h
 
m
e
s
s
a
g
e
 
e
x
a
c
t
l
y
 
o
n
c
e
.
"
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


 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
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
 
S
t
a
t
(
{
 
l
a
b
e
l
,
 
v
a
l
u
e
,
 
c
o
l
o
r
 
}
:
 
{
 
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
;
 
v
a
l
u
e
:
 
n
u
m
b
e
r
;
 
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
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
b
o
r
d
e
r
C
o
l
o
r
:
 
`
$
{
c
o
l
o
r
}
5
5
`
 
}
}


 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
2
p
x
"
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
 
8
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
`
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
 
`
$
{
c
o
l
o
r
}
1
0
`
,


 
 
 
 
 
 
 
 
t
e
x
t
A
l
i
g
n
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
}
}


 
 
 
 
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
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
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
 
"
0
.
6
6
r
e
m
"
,
 
c
o
l
o
r
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
 
}
}
>


 
 
 
 
 
 
 
 
{
l
a
b
e
l
.
t
o
U
p
p
e
r
C
a
s
e
(
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
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
 
"
1
.
4
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>


 
 
 
 
 
 
 
 
{
v
a
l
u
e
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
3
 
-
 
H
o
w
 
e
x
a
c
t
l
y
-
o
n
c
e
 
i
s
 
a
c
t
u
a
l
l
y
 
b
u
i
l
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




c
o
n
s
t
 
H
O
W
_
E
O
 
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
I
d
e
m
p
o
t
e
n
t
 
p
r
o
d
u
c
e
r
"
,


 
 
 
 
b
o
d
y
:
 
"
E
a
c
h
 
p
r
o
d
u
c
e
r
 
g
e
t
s
 
a
 
u
n
i
q
u
e
 
I
D
.
 
E
a
c
h
 
m
e
s
s
a
g
e
 
g
e
t
s
 
a
 
p
e
r
-
p
a
r
t
i
t
i
o
n
 
s
e
q
u
e
n
c
e
 
n
u
m
b
e
r
.
 
T
h
e
 
b
r
o
k
e
r
 
r
e
j
e
c
t
s
 
d
u
p
l
i
c
a
t
e
s
 
b
y
 
(
p
r
o
d
u
c
e
r
-
i
d
,
 
s
e
q
)
.
"
,


 
 
 
 
w
h
e
r
e
:
 
"
K
a
f
k
a
 
e
n
a
b
l
e
.
i
d
e
m
p
o
t
e
n
c
e
=
t
r
u
e
 
(
d
e
f
a
u
l
t
 
i
n
 
3
.
x
)
.
 
E
f
f
e
c
t
i
v
e
l
y
 
d
e
d
u
p
e
s
 
p
r
o
d
u
c
e
r
 
r
e
t
r
i
e
s
.
"
,


 
 
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
r
a
n
s
a
c
t
i
o
n
a
l
 
w
r
i
t
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
M
u
l
t
i
p
l
e
 
w
r
i
t
e
s
 
(
a
c
r
o
s
s
 
p
a
r
t
i
t
i
o
n
s
)
 
c
o
m
m
i
t
t
e
d
 
a
t
o
m
i
c
a
l
l
y
.
 
C
o
n
s
u
m
e
r
 
e
i
t
h
e
r
 
s
e
e
s
 
a
l
l
 
o
f
 
t
h
e
m
 
o
r
 
n
o
n
e
.
"
,


 
 
 
 
w
h
e
r
e
:
 
"
K
a
f
k
a
 
t
r
a
n
s
a
c
t
i
o
n
s
 
(
b
e
g
i
n
 
→
 
w
r
i
t
e
 
→
 
w
r
i
t
e
 
→
 
c
o
m
m
i
t
)
.
 
U
s
e
d
 
f
o
r
 
s
t
r
e
a
m
 
p
r
o
c
e
s
s
i
n
g
 
r
e
a
d
-
p
r
o
c
e
s
s
-
w
r
i
t
e
 
l
o
o
p
s
.
"
,


 
 
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
I
d
e
m
p
o
t
e
n
t
 
c
o
n
s
u
m
e
r
"
,


 
 
 
 
b
o
d
y
:
 
"
C
o
n
s
u
m
e
r
 
d
e
d
u
p
e
s
 
b
y
 
m
e
s
s
a
g
e
 
I
D
 
o
r
 
s
e
q
u
e
n
c
e
 
i
n
 
i
t
s
 
o
w
n
 
s
t
a
t
e
 
s
t
o
r
e
,
 
O
R
 
b
y
 
w
r
i
t
i
n
g
 
i
n
 
t
h
e
 
s
a
m
e
 
t
r
a
n
s
a
c
t
i
o
n
 
a
s
 
i
t
 
a
c
k
s
 
t
h
e
 
i
n
p
u
t
.
"
,


 
 
 
 
w
h
e
r
e
:
 
"
K
a
f
k
a
 
S
t
r
e
a
m
s
 
h
a
n
d
l
e
s
 
t
h
i
s
 
v
i
a
 
'
e
x
a
c
t
l
y
-
o
n
c
e
.
v
2
'
 
p
r
o
c
e
s
s
i
n
g
 
g
u
a
r
a
n
t
e
e
.
 
H
a
n
d
-
r
o
l
l
e
d
 
c
o
n
s
u
m
e
r
s
 
s
t
o
r
e
 
t
h
e
 
m
e
s
s
a
g
e
 
I
D
 
+
 
r
e
s
u
l
t
.
"
,


 
 
}
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
 
H
o
w
E
x
a
c
t
l
y
O
n
c
e
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
E
x
a
c
t
l
y
-
o
n
c
e
 
i
s
n
&
r
s
q
u
o
;
t
 
m
a
g
i
c
.
 
I
t
&
r
s
q
u
o
;
s
 
t
h
r
e
e
 
b
o
r
i
n
g
 
l
a
y
e
r
s
.
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
A
t
-
l
e
a
s
t
-
o
n
c
e
 
+
 
d
e
d
u
p
e
 
=
 
e
x
a
c
t
l
y
-
o
n
c
e
 
i
n
 
p
r
a
c
t
i
c
e
.
 
Y
o
u
 
n
e
e
d
 
c
o
o
p
e
r
a
t
i
o
n
 
f
r
o
m
 
p
r
o
d
u
c
e
r
,


 
 
 
 
 
 
 
 
b
r
o
k
e
r
,
 
a
n
d
 
c
o
n
s
u
m
e
r
.
 
S
k
i
p
 
a
n
y
 
o
f
 
t
h
e
 
t
h
r
e
e
 
l
a
y
e
r
s
 
a
n
d
 
y
o
u
&
r
s
q
u
o
;
r
e
 
b
a
c
k
 
t
o
 
a
t
-
l
e
a
s
t
-
o
n
c
e
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{
 
h
i
d
d
e
n
:
 
{
}
,
 
v
i
s
i
b
l
e
:
 
{
 
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
 
{
 
s
t
a
g
g
e
r
C
h
i
l
d
r
e
n
:
 
0
.
0
8
 
}
 
}
 
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
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
g
a
p
-
3
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
H
O
W
_
E
O
.
m
a
p
(
(
h
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
h
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
i
d
d
e
n
:
 
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
0
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
i
s
i
b
l
e
:
 
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
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
 
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
5
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
6
p
x
 
1
8
p
x
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
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
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
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
"
6
0
p
x
 
1
f
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
1
6
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
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
 
4
8
,
 
h
e
i
g
h
t
:
 
4
8
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
 
1
0
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
 
`
$
{
S
D
}
1
8
`
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
S
D
}
5
5
`
,
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
c
e
n
t
e
r
"
,
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
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
 
"
1
.
2
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
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
 
"
0
.
9
5
r
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>
{
h
.
t
i
t
l
e
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
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
8
 
}
}
>
{
h
.
b
o
d
y
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
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
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
 
"
0
.
7
4
r
e
m
"
,
 
c
o
l
o
r
:
 
S
D
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
m
a
r
g
i
n
R
i
g
h
t
:
 
4
 
}
}
>
E
X
 
·
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
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>
{
h
.
w
h
e
r
e
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
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
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
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
A
c
t
i
v
i
t
y
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




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
D
_
L
5
_
D
e
l
i
v
e
r
y
G
u
a
r
a
n
t
e
e
s
A
c
t
i
v
i
t
y
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
 
}
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
 
E
n
g
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
d
e
f
"
,
 
l
a
b
e
l
:
 
"
D
e
f
i
n
i
t
i
o
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
D
e
f
i
n
i
t
i
o
n
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
d
e
m
o
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
j
e
c
t
 
F
a
i
l
u
r
e
s
"
,
 
i
c
o
n
:
 
<
S
e
n
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
S
a
n
d
b
o
x
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
h
o
w
"
,
 
l
a
b
e
l
:
 
"
H
o
w
 
E
O
 
W
o
r
k
s
"
,
 
i
c
o
n
:
 
<
G
l
o
b
e
 
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
H
o
w
E
x
a
c
t
l
y
O
n
c
e
 
/
>
 
}
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
 
E
n
g
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
y
 
d
o
e
s
 
a
t
-
l
e
a
s
t
-
o
n
c
e
 
p
r
o
d
u
c
e
 
d
u
p
l
i
c
a
t
e
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
T
h
e
 
p
r
o
d
u
c
e
r
 
i
s
 
b
u
g
g
y
.
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
 
p
r
o
d
u
c
e
r
 
d
o
e
s
n
'
t
 
r
e
c
e
i
v
e
 
a
n
 
a
c
k
,
 
i
t
 
r
e
t
r
i
e
s
 
—
 
b
u
t
 
t
h
e
 
b
r
o
k
e
r
 
m
a
y
 
h
a
v
e
 
a
l
r
e
a
d
y
 
r
e
c
e
i
v
e
d
 
a
n
d
 
p
r
o
c
e
s
s
e
d
 
t
h
e
 
o
r
i
g
i
n
a
l
.
"
,


 
 
 
 
 
 
 
 
"
B
r
o
k
e
r
s
 
a
l
w
a
y
s
 
d
u
p
l
i
c
a
t
e
.
"
,


 
 
 
 
 
 
 
 
"
C
o
n
s
u
m
e
r
s
 
r
u
n
 
t
w
i
c
e
.
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
 
p
r
o
d
u
c
e
r
 
c
a
n
'
t
 
t
e
l
l
 
t
h
e
 
d
i
f
f
e
r
e
n
c
e
 
b
e
t
w
e
e
n
 
a
 
l
o
s
t
 
r
e
q
u
e
s
t
 
a
n
d
 
a
 
l
o
s
t
 
a
c
k
.
 
T
o
 
n
o
t
 
l
o
s
e
 
d
a
t
a
,
 
i
t
 
m
u
s
t
 
r
e
t
r
y
 
o
n
 
m
i
s
s
i
n
g
 
a
c
k
.
 
S
o
m
e
t
i
m
e
s
 
t
h
e
 
o
r
i
g
i
n
a
l
 
m
a
d
e
 
i
t
 
b
u
t
 
t
h
e
 
a
c
k
 
w
a
s
 
d
r
o
p
p
e
d
 
—
 
d
u
p
l
i
c
a
t
e
 
i
s
 
t
h
e
 
s
a
f
e
 
o
u
t
c
o
m
e
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
A
 
t
e
a
m
 
s
a
y
s
 
'
w
e
 
h
a
v
e
 
e
x
a
c
t
l
y
-
o
n
c
e
 
d
e
l
i
v
e
r
y
'
.
 
W
h
a
t
'
s
 
a
l
m
o
s
t
 
a
l
w
a
y
s
 
a
c
t
u
a
l
l
y
 
g
o
i
n
g
 
o
n
 
u
n
d
e
r
 
t
h
e
 
h
o
o
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
T
h
e
 
b
r
o
k
e
r
 
d
e
d
u
p
e
s
 
m
a
g
i
c
a
l
l
y
.
"
,


 
 
 
 
 
 
 
 
"
A
t
-
l
e
a
s
t
-
o
n
c
e
 
d
e
l
i
v
e
r
y
 
+
 
i
d
e
m
p
o
t
e
n
t
 
p
r
o
c
e
s
s
i
n
g
 
i
n
 
t
h
e
 
c
o
n
s
u
m
e
r
 
(
o
r
 
t
r
a
n
s
a
c
t
i
o
n
a
l
 
w
r
i
t
e
s
)
.
"
,


 
 
 
 
 
 
 
 
"
N
e
t
w
o
r
k
 
n
e
v
e
r
 
d
r
o
p
s
 
a
n
y
t
h
i
n
g
.
"
,


 
 
 
 
 
 
 
 
"
C
u
s
t
o
m
 
h
a
r
d
w
a
r
e
.
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
P
u
r
e
 
e
x
a
c
t
l
y
-
o
n
c
e
-
o
n
-
t
h
e
-
w
i
r
e
 
i
s
 
i
m
p
o
s
s
i
b
l
e
 
(
T
w
o
 
G
e
n
e
r
a
l
s
 
P
r
o
b
l
e
m
)
.
 
W
h
a
t
 
p
e
o
p
l
e
 
m
e
a
n
 
i
s
 
t
h
a
t
 
t
h
e
 
E
F
F
E
C
T
 
o
f
 
e
a
c
h
 
m
e
s
s
a
g
e
 
i
s
 
a
p
p
l
i
e
d
 
e
x
a
c
t
l
y
 
o
n
c
e
 
—
 
t
h
e
 
c
o
n
s
u
m
e
r
 
d
e
d
u
p
e
s
 
o
r
 
t
h
e
 
s
y
s
t
e
m
 
u
s
e
s
 
t
r
a
n
s
a
c
t
i
o
n
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
T
e
l
e
m
e
t
r
y
 
f
r
o
m
 
a
 
m
o
b
i
l
e
 
a
p
p
 
n
e
e
d
s
 
l
o
w
e
s
t
 
l
a
t
e
n
c
y
,
 
c
a
n
 
t
o
l
e
r
a
t
e
 
s
o
m
e
 
l
o
s
s
.
 
W
h
i
c
h
 
g
u
a
r
a
n
t
e
e
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
a
t
-
m
o
s
t
-
o
n
c
e
"
,
 
"
a
t
-
l
e
a
s
t
-
o
n
c
e
"
,
 
"
e
x
a
c
t
l
y
-
o
n
c
e
"
,
 
"
d
o
e
s
n
'
t
 
m
a
t
t
e
r
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
 
0
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
e
l
e
m
e
t
r
y
 
t
h
a
t
 
l
o
s
e
s
 
a
 
m
e
t
r
i
c
 
t
i
c
k
 
i
s
 
f
i
n
e
.
 
T
h
e
 
l
o
w
e
r
 
l
a
t
e
n
c
y
 
a
n
d
 
z
e
r
o
 
r
e
t
r
y
 
o
v
e
r
h
e
a
d
 
o
f
 
a
t
-
m
o
s
t
-
o
n
c
e
 
f
i
t
s
 
t
h
e
 
w
o
r
k
l
o
a
d
.
 
E
x
a
c
t
l
y
-
o
n
c
e
 
w
o
u
l
d
 
b
e
 
w
a
s
t
e
d
 
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
K
a
f
k
a
'
s
 
e
x
a
c
t
l
y
-
o
n
c
e
 
r
e
q
u
i
r
e
s
 
b
o
t
h
 
'
i
d
e
m
p
o
t
e
n
t
 
p
r
o
d
u
c
e
r
'
 
A
N
D
 
'
t
r
a
n
s
a
c
t
i
o
n
s
'
.
 
W
h
y
 
i
s
n
'
t
 
i
d
e
m
p
o
t
e
n
t
 
p
r
o
d
u
c
e
r
 
e
n
o
u
g
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
I
d
e
m
p
o
t
e
n
t
 
p
r
o
d
u
c
e
r
 
d
e
d
u
p
e
s
 
w
i
t
h
i
n
 
o
n
e
 
p
a
r
t
i
t
i
o
n
.
 
T
r
a
n
s
a
c
t
i
o
n
s
 
e
x
t
e
n
d
 
t
h
a
t
 
t
o
 
m
u
l
t
i
-
p
a
r
t
i
t
i
o
n
 
w
r
i
t
e
s
 
p
l
u
s
 
c
o
n
s
u
m
e
r
 
o
f
f
s
e
t
 
c
o
m
m
i
t
s
,
 
s
o
 
a
 
s
t
r
e
a
m
-
p
r
o
c
e
s
s
i
n
g
 
r
e
a
d
-
p
r
o
c
e
s
s
-
w
r
i
t
e
 
l
o
o
p
 
i
s
 
a
t
o
m
i
c
.
"
,


 
 
 
 
 
 
 
 
"
T
r
a
n
s
a
c
t
i
o
n
s
 
s
p
e
e
d
 
i
t
 
u
p
.
"
,


 
 
 
 
 
 
 
 
"
I
d
e
m
p
o
t
e
n
t
 
p
r
o
d
u
c
e
r
 
i
s
 
o
l
d
e
r
.
"
,


 
 
 
 
 
 
 
 
"
I
t
'
s
 
a
 
m
a
r
k
e
t
i
n
g
 
r
e
q
u
i
r
e
m
e
n
t
.
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
 
0
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
I
d
e
m
p
o
t
e
n
t
 
p
r
o
d
u
c
e
r
 
a
l
o
n
e
 
s
o
l
v
e
s
 
s
i
n
g
l
e
-
p
a
r
t
i
t
i
o
n
 
d
e
d
u
p
.
 
R
e
a
l
 
e
x
a
c
t
l
y
-
o
n
c
e
 
s
t
r
e
a
m
 
p
r
o
c
e
s
s
i
n
g
 
r
e
a
d
s
 
f
r
o
m
 
i
n
p
u
t
,
 
p
r
o
c
e
s
s
e
s
,
 
w
r
i
t
e
s
 
t
o
 
o
u
t
p
u
t
,
 
A
N
D
 
c
o
m
m
i
t
s
 
t
h
e
 
i
n
p
u
t
 
o
f
f
s
e
t
 
—
 
a
l
l
 
a
t
o
m
i
c
a
l
l
y
.
 
T
h
a
t
 
r
e
q
u
i
r
e
s
 
t
r
a
n
s
a
c
t
i
o
n
s
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
E
n
g
i
n
e
e
r
i
n
g
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
D
e
l
i
v
e
r
y
 
G
u
a
r
a
n
t
e
e
s
"


 
 
 
 
 
 
l
e
v
e
l
=
{
5
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
5
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
T
h
e
 
r
e
l
i
a
b
i
l
i
t
y
 
d
i
s
c
u
s
s
i
o
n
 
i
n
 
e
v
e
r
y
 
m
e
s
s
a
g
i
n
g
-
s
y
s
t
e
m
 
d
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


