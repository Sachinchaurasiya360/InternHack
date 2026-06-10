
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
r
e
d
i
t
C
a
r
d
,
 
G
l
o
b
e
,
 
K
e
y
,
 
R
o
t
a
t
e
C
c
w
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
:
 
s
a
f
e
 
t
o
 
c
a
l
l
 
a
g
a
i
n
.
 
A
n
d
 
a
g
a
i
n
.
 
A
n
d
 
a
g
a
i
n
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
n
 
o
p
e
r
a
t
i
o
n
 
i
s
 
<
b
>
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
<
/
b
>
 
i
f
 
c
a
l
l
i
n
g
 
i
t
 
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
 
h
a
s
 
t
h
e
 
s
a
m
e
 
e
f
f
e
c
t
 
a
s


 
 
 
 
 
 
 
 
c
a
l
l
i
n
g
 
i
t
 
o
n
c
e
.
 
N
e
t
w
o
r
k
 
r
e
t
r
i
e
s
,
 
m
o
b
i
l
e
 
a
p
p
s
 
w
i
t
h
 
f
l
a
k
y
 
c
o
n
n
e
c
t
i
o
n
s
,
 
m
e
s
s
a
g
e
-
q
u
e
u
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
y
 
—
 
a
l
l
 
o
f
 
t
h
e
m
 
w
i
l
l
,
 
e
v
e
n
t
u
a
l
l
y
,
 
d
e
l
i
v
e
r
 
t
h
e
 
s
a
m
e
 
r
e
q
u
e
s
t
 
t
w
i
c
e
.
 
I
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
 
i
s


 
 
 
 
 
 
 
 
w
h
a
t
 
p
r
o
t
e
c
t
s
 
y
o
u
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
2
 
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
[


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
k
i
n
d
:
 
"
N
a
t
u
r
a
l
l
y
 
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


 
 
 
 
 
 
 
 
 
 
 
 
e
x
:
 
'
P
U
T
 
/
u
s
e
r
s
/
4
2
 
{
 
"
n
a
m
e
"
:
 
"
A
s
h
a
"
 
}
'
,


 
 
 
 
 
 
 
 
 
 
 
 
n
o
t
e
:
 
"
S
e
t
t
i
n
g
 
t
h
e
 
s
a
m
e
 
f
i
e
l
d
s
 
t
o
 
t
h
e
 
s
a
m
e
 
v
a
l
u
e
s
 
t
w
i
c
e
 
i
s
 
t
h
e
 
s
a
m
e
 
a
s
 
o
n
c
e
.
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
k
i
n
d
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
 
b
y
 
k
e
y
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


 
 
 
 
 
 
 
 
 
 
 
 
e
x
:
 
'
P
O
S
T
 
/
c
h
a
r
g
e
s
 
{
 
"
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
_
k
e
y
"
:
 
"
o
r
d
_
1
2
3
"
,
 
"
a
m
t
"
:
 
9
9
9
 
}
'
,


 
 
 
 
 
 
 
 
 
 
 
 
n
o
t
e
:
 
"
S
e
r
v
e
r
 
s
t
o
r
e
s
 
t
h
e
 
k
e
y
 
+
 
r
e
s
u
l
t
.
 
R
e
p
l
a
y
 
r
e
t
u
r
n
s
 
t
h
e
 
c
a
c
h
e
d
 
r
e
s
p
o
n
s
e
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
-
e
x
e
c
u
t
e
.
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
k
i
n
d
:
 
"
N
o
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


 
 
 
 
 
 
 
 
 
 
 
 
e
x
:
 
"
P
O
S
T
 
/
t
r
a
n
s
f
e
r
s
 
{
 
f
r
o
m
:
 
A
,
 
t
o
:
 
B
,
 
a
m
t
:
 
1
0
0
 
}
"
,


 
 
 
 
 
 
 
 
 
 
 
 
n
o
t
e
:
 
"
T
w
o
 
c
a
l
l
s
 
=
 
t
w
o
 
t
r
a
n
s
f
e
r
s
 
=
 
₹
2
0
0
 
m
o
v
e
d
 
i
n
s
t
e
a
d
 
o
f
 
₹
1
0
0
.
 
B
a
d
.
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
k
i
n
d
:
 
"
C
o
n
d
i
t
i
o
n
a
l
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


 
 
 
 
 
 
 
 
 
 
 
 
e
x
:
 
"
P
U
T
 
/
u
s
e
r
s
/
4
2
 
I
f
-
M
a
t
c
h
:
 
e
t
a
g
-
a
b
c
1
2
3
"
,


 
 
 
 
 
 
 
 
 
 
 
 
n
o
t
e
:
 
"
S
e
r
v
e
r
 
r
e
j
e
c
t
s
 
i
f
 
t
h
e
 
v
e
r
s
i
o
n
 
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
c
h
.
 
R
e
t
r
i
e
s
 
p
a
s
t
 
t
h
e
 
f
i
r
s
t
 
o
n
e
 
f
a
i
l
 
s
a
f
e
l
y
.
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
c
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
c
.
k
i
n
d
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
 
y
:
 
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
4
5
,
 
d
e
l
a
y
:
 
i
 
*
 
0
.
0
8
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
4
p
x
 
1
6
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
c
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
 
c
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
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
.
k
i
n
d
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
0
.
7
8
r
e
m
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
s
u
r
f
a
c
e
)
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
 
6
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
c
.
e
x
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
c
.
n
o
t
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
4
p
x
 
1
6
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


 
 
 
 
 
 
 
 
 
 
R
E
A
L
 
E
X
A
M
P
L
E
S


 
 
 
 
 
 
 
 
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
7
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
b
>
S
t
r
i
p
e
<
/
b
>
 
r
e
q
u
i
r
e
s
 
a
n
 
<
c
o
d
e
 
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
 
}
}
>
I
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
-
K
e
y
<
/
c
o
d
e
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
h
e
a
d
e
r
 
o
n
 
e
v
e
r
y
 
c
h
a
r
g
e
.
 
<
b
>
A
W
S
 
A
P
I
 
G
a
t
e
w
a
y
<
/
b
>
 
e
x
p
o
s
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
c
y
 
t
o
k
e
n
s
 
f
o
r


 
 
 
 
 
 
 
 
 
 
A
P
I
 
c
a
l
l
s
.
 
<
b
>
R
a
z
o
r
p
a
y
<
/
b
>
 
u
s
e
s
 
o
r
d
e
r
 
I
D
s
 
a
s
 
n
a
t
u
r
a
l
 
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
 
<
b
>
K
a
f
k
a
<
/
b
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
p
r
o
d
u
c
e
r
-
s
i
d
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
c
y
 
u
s
e
s
 
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
 
p
e
r
 
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
 
A
n
y


 
 
 
 
 
 
 
 
 
 
p
a
y
m
e
n
t
 
s
y
s
t
e
m
 
t
h
a
t
 
d
i
d
n
&
r
s
q
u
o
;
t
 
b
a
k
e
 
t
h
i
s
 
i
n
 
h
a
s
 
b
e
e
n
 
b
i
t
t
e
n
 
i
n
 
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
.


 
 
 
 
 
 
 
 
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
 
R
e
t
r
y
 
s
t
o
r
m
 
w
i
t
h
 
k
e
y
 
t
o
g
g
l
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




i
n
t
e
r
f
a
c
e
 
C
h
a
r
g
e
A
t
t
e
m
p
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


 
 
s
t
a
t
u
s
:
 
"
p
e
n
d
i
n
g
"
 
|
 
"
a
p
p
l
i
e
d
"
 
|
 
"
d
e
d
u
p
e
d
"
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
 
R
e
t
r
y
S
t
o
r
m
(
)
 
{


 
 
c
o
n
s
t
 
[
k
e
y
O
n
,
 
s
e
t
K
e
y
O
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
a
t
t
e
m
p
t
s
,
 
s
e
t
A
t
t
e
m
p
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
C
h
a
r
g
e
A
t
t
e
m
p
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
c
o
m
m
i
t
t
e
d
,
 
s
e
t
C
o
m
m
i
t
t
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
s
e
e
n
K
e
y
s
,
 
s
e
t
S
e
e
n
K
e
y
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
S
e
t
<
s
t
r
i
n
g
>
>
(
n
e
w
 
S
e
t
(
)
)
;




 
 
c
o
n
s
t
 
t
o
t
a
l
A
m
t
 
=
 
c
o
m
m
i
t
t
e
d
 
*
 
9
9
9
;




 
 
c
o
n
s
t
 
s
t
a
r
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
A
t
t
e
m
p
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
C
o
m
m
i
t
t
e
d
(
0
)
;


 
 
 
 
s
e
t
S
e
e
n
K
e
y
s
(
n
e
w
 
S
e
t
(
)
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


 
 
}
;




 
 
/
/
 
S
i
m
u
l
a
t
e
 
5
 
r
e
t
r
i
e
s
 
w
i
t
h
 
r
a
n
d
o
m
 
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


 
 
 
 
i
f
 
(
!
r
u
n
n
i
n
g
)
 
r
e
t
u
r
n
;


 
 
 
 
c
o
n
s
t
 
t
o
t
a
l
R
e
t
r
i
e
s
 
=
 
5
;


 
 
 
 
l
e
t
 
i
d
x
 
=
 
0
;


 
 
 
 
c
o
n
s
t
 
t
i
c
k
 
=
 
(
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
i
d
x
 
>
=
 
t
o
t
a
l
R
e
t
r
i
e
s
)
 
{


 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
 
 
}


 
 
 
 
 
 
c
o
n
s
t
 
i
d
 
=
 
i
d
x
;


 
 
 
 
 
 
c
o
n
s
t
 
k
e
y
 
=
 
"
o
r
d
_
4
2
"
;


 
 
 
 
 
 
s
e
t
A
t
t
e
m
p
t
s
(
(
a
r
r
)
 
=
>
 
[
.
.
.
a
r
r
,
 
{
 
i
d
,
 
s
t
a
t
u
s
:
 
"
p
e
n
d
i
n
g
"
 
}
]
)
;




 
 
 
 
 
 
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
A
t
t
e
m
p
t
s
(
(
a
r
r
)
 
=
>


 
 
 
 
 
 
 
 
 
 
a
r
r
.
m
a
p
(
(
a
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
a
.
i
d
 
!
=
=
 
i
d
)
 
r
e
t
u
r
n
 
a
;


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
k
e
y
O
n
 
&
&
 
s
e
e
n
K
e
y
s
.
h
a
s
(
k
e
y
)
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
{
 
.
.
.
a
,
 
s
t
a
t
u
s
:
 
"
d
e
d
u
p
e
d
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
 
.
.
.
a
,
 
s
t
a
t
u
s
:
 
"
a
p
p
l
i
e
d
"
 
}
;


 
 
 
 
 
 
 
 
 
 
}
)
,


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
i
f
 
(
k
e
y
O
n
)
 
{


 
 
 
 
 
 
 
 
 
 
s
e
t
S
e
e
n
K
e
y
s
(
(
s
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
s
.
h
a
s
(
k
e
y
)
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
C
o
m
m
i
t
t
e
d
(
(
c
)
 
=
>
 
c
 
+
 
1
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
e
x
t
 
=
 
n
e
w
 
S
e
t
(
s
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
e
x
t
.
a
d
d
(
k
e
y
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
n
e
x
t
;


 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
s
;


 
 
 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
 
 
s
e
t
C
o
m
m
i
t
t
e
d
(
(
c
)
 
=
>
 
c
 
+
 
1
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
}
,
 
6
0
0
)
;




 
 
 
 
 
 
i
d
x
 
+
=
 
1
;


 
 
 
 
 
 
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
t
i
c
k
,
 
9
0
0
)
;


 
 
 
 
}
;


 
 
 
 
t
i
c
k
(
)
;


 
 
}
,
 
[
r
u
n
n
i
n
g
,
 
k
e
y
O
n
,
 
s
e
e
n
K
e
y
s
]
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
A
t
t
e
m
p
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
C
o
m
m
i
t
t
e
d
(
0
)
;


 
 
 
 
s
e
t
S
e
e
n
K
e
y
s
(
n
e
w
 
S
e
t
(
)
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
C
h
a
r
g
e
 
₹
9
9
9
.
 
N
o
w
 
r
e
t
r
y
 
i
t
 
5
 
t
i
m
e
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
 
f
l
a
k
y
 
c
o
n
n
e
c
t
i
o
n
 
r
e
t
r
i
e
s
 
t
h
e
 
s
a
m
e
 
c
h
a
r
g
e
 
5
 
t
i
m
e
s
.
 
T
o
g
g
l
e
 
t
h
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
c
y
 
k
e
y
 
o
f
f
 
a
n
d
 
o
n


 
 
 
 
 
 
 
 
a
n
d
 
w
a
t
c
h
 
w
h
a
t
 
t
h
e
 
s
e
r
v
e
r
 
r
e
c
o
r
d
s
.
 
W
i
t
h
o
u
t
 
t
h
e
 
k
e
y
:
 
5
 
c
h
a
r
g
e
s
.
 
W
i
t
h
 
t
h
e
 
k
e
y
:
 
1
 
c
h
a
r
g
e
,


 
 
 
 
 
 
 
 
4
 
d
e
d
u
p
e
d
 
r
e
s
p
o
n
s
e
s
 
r
e
t
u
r
n
i
n
g
 
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
 
r
e
c
e
i
p
t
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
3
 
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
 
s
e
t
K
e
y
O
n
(
(
k
)
 
=
>
 
!
k
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
 
8
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
k
e
y
O
n
 
?
 
S
D
 
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
 
k
e
y
O
n
 
?
 
`
$
{
S
D
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
 
k
e
y
O
n
 
?
 
S
D
 
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
1
8
s
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
K
e
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
 
{
k
e
y
O
n
 
?
 
"
O
N
"
 
:
 
"
O
F
F
"
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
h
e
a
d
e
r
:
 
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
 
k
e
y
O
n
 
?
 
S
D
 
:
 
N
E
U
T
R
A
L
 
}
}
>
I
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
-
K
e
y
:
 
o
r
d
_
4
2
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
<
s
v
g
 
v
i
e
w
B
o
x
=
"
0
 
0
 
7
2
0
 
2
2
0
"
 
w
i
d
t
h
=
"
1
0
0
%
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
a
x
W
i
d
t
h
:
 
7
6
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
b
l
o
c
k
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
 
a
u
t
o
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
c
l
i
e
n
t
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
N
o
d
e
R
e
c
t
 
x
=
{
2
0
}
 
y
=
{
8
0
}
 
w
=
{
1
2
0
}
 
h
=
{
6
0
}
 
l
a
b
e
l
=
"
M
o
b
i
l
e
 
A
p
p
"
 
s
u
b
=
"
r
e
t
r
y
i
n
g
…
"
 
c
o
l
o
r
=
{
r
u
n
n
i
n
g
 
?
 
S
D
 
:
 
N
E
U
T
R
A
L
}
 
p
u
l
s
e
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
 
/
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
s
e
r
v
e
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
N
o
d
e
R
e
c
t
 
x
=
{
5
8
0
}
 
y
=
{
4
0
}
 
w
=
{
1
2
0
}
 
h
=
{
6
0
}
 
l
a
b
e
l
=
"
C
h
a
r
g
e
 
A
P
I
"
 
s
u
b
=
{
k
e
y
O
n
 
?
 
"
c
h
e
c
k
s
 
k
e
y
"
 
:
 
"
n
o
 
d
e
d
u
p
"
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


 
 
 
 
 
 
 
 
 
 
{
/
*
 
l
e
d
g
e
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
N
o
d
e
R
e
c
t
 
x
=
{
5
8
0
}
 
y
=
{
1
4
0
}
 
w
=
{
1
2
0
}
 
h
=
{
6
0
}
 
l
a
b
e
l
=
"
L
e
d
g
e
r
"
 
s
u
b
=
{
`
₹
 
$
{
t
o
t
a
l
A
m
t
.
t
o
L
o
c
a
l
e
S
t
r
i
n
g
(
)
}
`
}
 
c
o
l
o
r
=
{
c
o
m
m
i
t
t
e
d
 
>
 
1
 
&
&
 
!
k
e
y
O
n
 
?
 
W
A
R
N
 
:
 
S
D
}
 
/
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
e
d
g
e
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
1
4
0
}
 
y
1
=
{
1
1
0
}
 
x
2
=
{
5
8
0
}
 
y
2
=
{
7
0
}
 
s
t
r
o
k
e
=
"
#
4
7
5
5
6
9
"
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
5
}
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
"
3
 
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
6
4
0
}
 
y
1
=
{
1
0
0
}
 
x
2
=
{
6
4
0
}
 
y
2
=
{
1
4
0
}
 
s
t
r
o
k
e
=
"
#
4
7
5
5
6
9
"
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
5
}
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
"
3
 
4
"
 
/
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
r
e
t
r
y
 
p
a
c
k
e
t
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
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
a
t
t
e
m
p
t
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
a
)
 
=
>
 
a
.
s
t
a
t
u
s
 
=
=
=
 
"
p
e
n
d
i
n
g
"
)
.
m
a
p
(
(
a
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
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
`
p
k
t
-
$
{
a
.
i
d
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
S
D
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
 
c
x
:
 
1
4
0
,
 
c
y
:
 
1
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
 
c
x
:
 
5
8
0
,
 
c
y
:
 
7
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
6
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
)
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
s
v
g
>




 
 
 
 
 
 
 
 
{
/
*
 
A
t
t
e
m
p
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
 
6
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
 
1
6
 
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
a
t
t
e
m
p
t
s
.
m
a
p
(
(
a
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
A
p
p
l
i
e
d
 
=
 
a
.
s
t
a
t
u
s
 
=
=
=
 
"
a
p
p
l
i
e
d
"
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
D
e
d
u
p
e
d
 
=
 
a
.
s
t
a
t
u
s
 
=
=
=
 
"
d
e
d
u
p
e
d
"
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
 
=
 
i
s
A
p
p
l
i
e
d
 
?
 
S
D
 
:
 
i
s
D
e
d
u
p
e
d
 
?
 
N
E
U
T
R
A
L
 
:
 
W
A
R
N
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
a
.
i
d
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
 
-
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
1
0
p
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
2
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
8
e
m
"
 
}
}
>
R
E
T
R
Y
 
{
a
.
i
d
 
+
 
1
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
P
O
S
T
 
/
c
h
a
r
g
e
s
 
&
n
b
s
p
;
·
&
n
b
s
p
;
 
₹
9
9
9
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
.
s
t
a
t
u
s
 
=
=
=
 
"
p
e
n
d
i
n
g
"
 
?
 
"
i
n
 
f
l
i
g
h
t
…
"
 
:
 
i
s
A
p
p
l
i
e
d
 
?
 
"
✓
 
c
h
a
r
g
e
d
"
 
:
 
"
↩
 
d
e
d
u
p
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
t
a
r
t
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
 
r
e
t
r
i
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


 
 
 
 
 
 
 
 
 
 
 
 
<
R
o
t
a
t
e
C
c
w
 
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
l
e
x
:
 
1
 
}
}
 
/
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
l
e
d
g
e
r
:
 
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
 
k
e
y
O
n
 
?
 
S
D
 
:
 
c
o
m
m
i
t
t
e
d
 
>
 
1
 
?
 
W
A
R
N
 
:
 
S
D
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
₹
 
{
t
o
t
a
l
A
m
t
.
t
o
L
o
c
a
l
e
S
t
r
i
n
g
(
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
 
c
o
m
m
i
t
t
e
d
 
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
`
$
{
k
e
y
O
n
}
-
$
{
c
o
m
m
i
t
t
e
d
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
 
k
e
y
O
n
 
?
 
`
$
{
S
D
}
1
4
`
 
:
 
`
$
{
W
A
R
N
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
(
k
e
y
O
n
 
?
 
S
D
 
:
 
W
A
R
N
)
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
 
k
e
y
O
n
 
?
 
S
D
 
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
 
k
e
y
O
n
 
?
 
S
D
 
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
2
e
m
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
k
e
y
O
n
 
?
 
"
E
X
A
C
T
L
Y
-
O
N
C
E
"
 
:
 
"
A
T
-
L
E
A
S
T
-
O
N
C
E
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
k
e
y
O
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
`
O
n
e
 
c
h
a
r
g
e
 
o
f
 
₹
9
9
9
 
i
n
 
t
h
e
 
l
e
d
g
e
r
.
 
T
h
e
 
o
t
h
e
r
 
4
 
r
e
t
r
i
e
s
 
r
e
t
u
r
n
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
 
r
e
c
e
i
p
t
 
w
i
t
h
o
u
t
 
r
e
-
c
h
a
r
g
i
n
g
.
 
T
h
e
 
u
s
e
r
 
i
s
 
h
a
p
p
y
.
`


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
`
F
i
v
e
 
c
h
a
r
g
e
s
 
o
f
 
₹
9
9
9
 
=
 
₹
$
{
t
o
t
a
l
A
m
t
.
t
o
L
o
c
a
l
e
S
t
r
i
n
g
(
)
}
 
i
n
 
t
h
e
 
l
e
d
g
e
r
.
 
T
h
e
 
u
s
e
r
 
c
a
l
l
s
 
s
u
p
p
o
r
t
,
 
y
o
u
 
e
a
t
 
t
h
e
 
c
o
s
t
,
 
p
o
s
t
m
o
r
t
e
m
 
t
i
m
e
.
`
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
 
N
o
d
e
R
e
c
t
(
{
 
x
,
 
y
,
 
w
,
 
h
,
 
l
a
b
e
l
,
 
s
u
b
,
 
c
o
l
o
r
,
 
p
u
l
s
e
 
}
:
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
;
 
w
:
 
n
u
m
b
e
r
;
 
h
:
 
n
u
m
b
e
r
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
;
 
s
u
b
:
 
s
t
r
i
n
g
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
;
 
p
u
l
s
e
?
:
 
b
o
o
l
e
a
n
 
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
g
 
t
r
a
n
s
f
o
r
m
=
{
`
t
r
a
n
s
l
a
t
e
(
$
{
x
}
,
 
$
{
y
}
)
`
}
>


 
 
 
 
 
 
{
p
u
l
s
e
 
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
r
e
c
t


 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
=
{
w
}


 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
=
{
h
}


 
 
 
 
 
 
 
 
 
 
r
x
=
{
8
}


 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
c
o
l
o
r
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
.
2
5
,
 
s
c
a
l
e
:
 
1
 
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
 
0
,
 
s
c
a
l
e
:
 
1
.
1
5
 
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
 
1
.
4
,
 
r
e
p
e
a
t
:
 
I
n
f
i
n
i
t
y
,
 
e
a
s
e
:
 
"
e
a
s
e
O
u
t
"
 
}
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
r
e
c
t
 
w
i
d
t
h
=
{
w
}
 
h
e
i
g
h
t
=
{
h
}
 
r
x
=
{
8
}
 
f
i
l
l
=
{
`
$
{
c
o
l
o
r
}
2
2
`
}
 
s
t
r
o
k
e
=
{
c
o
l
o
r
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
5
}
 
/
>


 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
w
 
/
 
2
}
 
y
=
{
2
6
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
i
l
l
=
"
#
e
5
e
7
e
b
"
 
f
o
n
t
S
i
z
e
=
{
1
2
}
 
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
=
{
7
0
0
}
 
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
=
{
M
O
N
O
}
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
t
e
x
t
>


 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
w
 
/
 
2
}
 
y
=
{
4
4
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
i
l
l
=
{
c
o
l
o
r
}
 
f
o
n
t
S
i
z
e
=
{
1
0
}
 
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
=
{
M
O
N
O
}
>


 
 
 
 
 
 
 
 
{
s
u
b
}


 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
<
/
g
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
 
R
e
a
l
-
w
o
r
l
d
 
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
 
d
e
s
i
g
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
T
o
D
e
s
i
g
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
H
o
w
 
a
 
r
e
a
l
 
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
 
e
n
d
p
o
i
n
t
 
i
s
 
b
u
i
l
t
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


 
 
 
 
 
 
 
 
T
h
e
 
p
a
t
t
e
r
n
 
i
s
 
s
m
a
l
l
.
 
T
h
e
 
d
i
s
c
i
p
l
i
n
e
 
i
s
 
w
h
a
t
 
m
a
t
t
e
r
s
:
 
e
v
e
r
y
 
w
r
i
t
e
 
e
n
d
p
o
i
n
t
 
e
x
p
o
s
e
d


 
 
 
 
 
 
 
 
t
o
 
r
e
t
r
y
-
p
r
o
n
e
 
c
l
i
e
n
t
s
 
s
h
o
u
l
d
 
f
o
l
l
o
w
 
t
h
i
s
 
s
h
a
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


 
 
 
 
 
 
 
 
<
p
r
e


 
 
 
 
 
 
 
 
 
 
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
:
 
0
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
8
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
7
5
,


 
 
 
 
 
 
 
 
 
 
 
 
o
v
e
r
f
l
o
w
X
:
 
"
a
u
t
o
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
 
N
E
U
T
R
A
L
 
}
}
>
{
`
/
/
 
P
O
S
T
 
/
c
h
a
r
g
e
s
`
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
{
"
\
n
"
}


 
 
 
 
 
 
 
 
 
 
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
 
N
E
U
T
R
A
L
 
}
}
>
{
`
/
/
 
h
e
a
d
e
r
:
 
I
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
-
K
e
y
:
 
<
c
l
i
e
n
t
-
g
e
n
e
r
a
t
e
d
-
u
u
i
d
>
`
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
{
"
\
n
\
n
"
}


 
 
 
 
 
 
 
 
 
 
a
s
y
n
c
 
f
u
n
c
t
i
o
n
 
c
h
a
r
g
e
(
r
e
q
)
 
{
"
{
"
}


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
"
}
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
 
S
D
 
}
}
>
c
o
n
s
t
<
/
s
p
a
n
>
 
k
e
y
 
=
 
r
e
q
.
h
e
a
d
e
r
(
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
 
W
A
R
N
 
}
}
>
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
c
y
-
K
e
y
"
<
/
s
p
a
n
>
)
;


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
"
}
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
 
S
D
 
}
}
>
i
f
<
/
s
p
a
n
>
 
(
!
k
e
y
)
 
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
 
S
D
 
}
}
>
t
h
r
o
w
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
 
W
A
R
N
 
}
}
>
"
m
i
s
s
i
n
g
 
k
e
y
"
<
/
s
p
a
n
>
;


 
 
 
 
 
 
 
 
 
 
{
"
\
n
\
n
 
 
"
}


 
 
 
 
 
 
 
 
 
 
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
 
N
E
U
T
R
A
L
 
}
}
>
{
`
/
/
 
1
.
 
h
a
s
 
t
h
e
 
s
e
r
v
e
r
 
s
e
e
n
 
t
h
i
s
 
k
e
y
 
b
e
f
o
r
e
?
`
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
"
}
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
 
S
D
 
}
}
>
c
o
n
s
t
<
/
s
p
a
n
>
 
c
a
c
h
e
d
 
=
 
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
 
S
D
 
}
}
>
a
w
a
i
t
<
/
s
p
a
n
>
 
s
t
o
r
e
.
g
e
t
(
k
e
y
)
;


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
"
}
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
 
S
D
 
}
}
>
i
f
<
/
s
p
a
n
>
 
(
c
a
c
h
e
d
)
 
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
 
S
D
 
}
}
>
r
e
t
u
r
n
<
/
s
p
a
n
>
 
c
a
c
h
e
d
.
r
e
s
p
o
n
s
e
;


 
 
 
 
 
 
 
 
 
 
{
"
\
n
\
n
 
 
"
}


 
 
 
 
 
 
 
 
 
 
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
 
N
E
U
T
R
A
L
 
}
}
>
{
`
/
/
 
2
.
 
a
c
q
u
i
r
e
 
a
 
p
e
r
-
k
e
y
 
l
o
c
k
 
s
o
 
t
w
o
 
r
e
t
r
i
e
s
 
d
o
n
'
t
 
r
a
c
e
`
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
"
}
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
 
S
D
 
}
}
>
c
o
n
s
t
<
/
s
p
a
n
>
 
l
o
c
k
 
=
 
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
 
S
D
 
}
}
>
a
w
a
i
t
<
/
s
p
a
n
>
 
s
t
o
r
e
.
a
c
q
u
i
r
e
L
o
c
k
(
k
e
y
)
;


 
 
 
 
 
 
 
 
 
 
{
"
\
n
\
n
 
 
"
}


 
 
 
 
 
 
 
 
 
 
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
 
N
E
U
T
R
A
L
 
}
}
>
{
`
/
/
 
3
.
 
p
e
r
f
o
r
m
 
t
h
e
 
s
i
d
e
-
e
f
f
e
c
t
 
i
n
s
i
d
e
 
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
`
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
"
}
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
 
S
D
 
}
}
>
c
o
n
s
t
<
/
s
p
a
n
>
 
r
e
s
u
l
t
 
=
 
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
 
S
D
 
}
}
>
a
w
a
i
t
<
/
s
p
a
n
>
 
d
b
.
t
x
(
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
 
S
D
 
}
}
>
a
s
y
n
c
<
/
s
p
a
n
>
 
(
t
)
 
=
&
g
t
;
 
{
"
{
"
}


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
 
 
"
}
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
 
S
D
 
}
}
>
a
w
a
i
t
<
/
s
p
a
n
>
 
l
e
d
g
e
r
.
i
n
s
e
r
t
(
t
,
 
{
"
{
"
}
 
k
e
y
,
 
a
m
t
:
 
r
e
q
.
a
m
t
 
{
"
}
"
}
)
;


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
 
 
"
}
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
 
S
D
 
}
}
>
r
e
t
u
r
n
<
/
s
p
a
n
>
 
{
"
{
"
}
 
i
d
:
 
k
e
y
,
 
s
t
a
t
u
s
:
 
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
 
W
A
R
N
 
}
}
>
"
c
h
a
r
g
e
d
"
<
/
s
p
a
n
>
 
{
"
}
"
}
;


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
"
}
{
"
}
"
}
)
;


 
 
 
 
 
 
 
 
 
 
{
"
\
n
\
n
 
 
"
}


 
 
 
 
 
 
 
 
 
 
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
 
N
E
U
T
R
A
L
 
}
}
>
{
`
/
/
 
4
.
 
c
a
c
h
e
 
t
h
e
 
r
e
s
p
o
n
s
e
,
 
r
e
l
e
a
s
e
 
t
h
e
 
l
o
c
k
`
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
"
}
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
 
S
D
 
}
}
>
a
w
a
i
t
<
/
s
p
a
n
>
 
s
t
o
r
e
.
s
e
t
(
k
e
y
,
 
r
e
s
u
l
t
,
 
t
t
l
:
 
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
 
W
A
R
N
 
}
}
>
"
2
4
h
"
<
/
s
p
a
n
>
)
;


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
"
}
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
 
S
D
 
}
}
>
a
w
a
i
t
<
/
s
p
a
n
>
 
l
o
c
k
.
r
e
l
e
a
s
e
(
)
;


 
 
 
 
 
 
 
 
 
 
{
"
\
n
\
n
 
 
"
}
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
 
S
D
 
}
}
>
r
e
t
u
r
n
<
/
s
p
a
n
>
 
r
e
s
u
l
t
;


 
 
 
 
 
 
 
 
 
 
{
"
\
n
"
}
{
"
}
"
}


 
 
 
 
 
 
 
 
<
/
p
r
e
>


 
 
 
 
 
 
<
/
d
i
v
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
t
-
5
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
W
h
e
r
e
 
k
e
y
s
 
l
i
v
e
"
,
 
v
:
 
"
R
e
d
i
s
 
w
i
t
h
 
a
 
T
T
L
 
(
2
4
h
 
i
s
 
t
y
p
i
c
a
l
)
 
o
r
 
a
 
d
e
d
i
c
a
t
e
d
 
P
o
s
t
g
r
e
s
 
t
a
b
l
e
 
w
i
t
h
 
a
 
u
n
i
q
u
e
 
i
n
d
e
x
 
o
n
 
t
h
e
 
k
e
y
.
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
W
h
o
 
p
i
c
k
s
 
t
h
e
 
k
e
y
"
,
 
v
:
 
"
T
h
e
 
c
l
i
e
n
t
.
 
U
U
I
D
 
v
4
 
i
s
 
f
i
n
e
.
 
S
e
r
v
e
r
-
g
e
n
e
r
a
t
e
d
 
k
e
y
s
 
d
e
f
e
a
t
 
t
h
e
 
p
o
i
n
t
 
o
f
 
r
e
t
r
y
-
s
a
f
e
t
y
.
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
k
:
 
"
W
h
a
t
 
g
e
t
s
 
c
a
c
h
e
d
"
,
 
v
:
 
"
T
h
e
 
f
u
l
l
 
r
e
s
p
o
n
s
e
,
 
i
n
c
l
u
d
i
n
g
 
s
t
a
t
u
s
 
c
o
d
e
 
a
n
d
 
b
o
d
y
.
 
A
 
r
e
t
r
y
 
r
e
t
u
r
n
s
 
b
y
t
e
-
f
o
r
-
b
y
t
e
 
t
h
e
 
s
a
m
e
 
a
n
s
w
e
r
.
"
 
}
,


 
 
 
 
 
 
 
 
]
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
c
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
 
8
 
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
4
p
x
 
1
6
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
c
.
k
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
c
.
v
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
4
_
I
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
r
e
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
R
e
t
r
y
 
S
t
o
r
m
"
,
 
i
c
o
n
:
 
<
C
r
e
d
i
t
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
R
e
t
r
y
S
t
o
r
m
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
b
u
i
l
d
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
 
t
o
 
B
u
i
l
d
 
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
T
o
D
e
s
i
g
n
 
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
i
c
h
 
H
T
T
P
 
m
e
t
h
o
d
 
i
s
 
n
a
t
u
r
a
l
l
y
 
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
 
w
i
t
h
o
u
t
 
a
n
y
 
e
x
t
r
a
 
w
o
r
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
P
O
S
T
"
,
 
"
P
U
T
"
,
 
"
P
A
T
C
H
 
(
a
l
w
a
y
s
)
"
,
 
"
A
n
y
 
o
f
 
t
h
e
s
e
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
P
U
T
 
r
e
p
l
a
c
e
s
 
a
 
r
e
s
o
u
r
c
e
 
w
i
t
h
 
t
h
e
 
g
i
v
e
n
 
r
e
p
r
e
s
e
n
t
a
t
i
o
n
 
—
 
c
a
l
l
i
n
g
 
i
t
 
t
w
i
c
e
 
w
i
t
h
 
t
h
e
 
s
a
m
e
 
b
o
d
y
 
h
a
s
 
t
h
e
 
s
a
m
e
 
e
f
f
e
c
t
 
a
s
 
c
a
l
l
i
n
g
 
i
t
 
o
n
c
e
.
 
P
O
S
T
 
c
r
e
a
t
e
s
 
a
 
n
e
w
 
r
e
s
o
u
r
c
e
 
e
a
c
h
 
c
a
l
l
 
b
y
 
d
e
f
a
u
l
t
 
a
n
d
 
n
e
e
d
s
 
a
n
 
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
 
t
o
 
b
e
 
r
e
t
r
y
-
s
a
f
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
 
u
s
e
r
 
d
o
u
b
l
e
-
c
l
i
c
k
s
 
'
P
a
y
'
.
 
T
h
e
 
m
o
b
i
l
e
 
a
p
p
 
s
e
n
d
s
 
t
h
e
 
r
e
q
u
e
s
t
 
t
w
i
c
e
.
 
W
h
a
t
'
s
 
t
h
e
 
c
l
e
a
n
e
s
t
 
s
e
r
v
e
r
-
s
i
d
e
 
d
e
f
e
n
s
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
D
i
s
a
b
l
e
 
d
o
u
b
l
e
-
c
l
i
c
k
 
i
n
 
t
h
e
 
U
I
.
"
,


 
 
 
 
 
 
 
 
"
R
e
q
u
i
r
e
 
t
h
e
 
c
l
i
e
n
t
 
t
o
 
a
t
t
a
c
h
 
a
n
 
I
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
-
K
e
y
 
p
e
r
 
l
o
g
i
c
a
l
 
o
p
e
r
a
t
i
o
n
;
 
s
e
r
v
e
r
 
c
a
c
h
e
s
 
f
i
r
s
t
 
r
e
s
u
l
t
 
a
n
d
 
r
e
t
u
r
n
s
 
i
t
 
f
o
r
 
a
n
y
 
r
e
t
r
y
 
w
i
t
h
 
t
h
e
 
s
a
m
e
 
k
e
y
.
"
,


 
 
 
 
 
 
 
 
"
A
d
d
 
a
 
5
-
s
e
c
o
n
d
 
c
o
o
l
d
o
w
n
 
t
o
 
t
h
e
 
b
u
t
t
o
n
.
"
,


 
 
 
 
 
 
 
 
"
R
e
j
e
c
t
 
a
l
l
 
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
q
u
e
s
t
s
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
U
I
 
f
i
x
e
s
 
a
r
e
 
n
o
t
 
e
n
o
u
g
h
 
—
 
f
l
a
k
y
 
n
e
t
w
o
r
k
s
,
 
a
p
p
 
c
r
a
s
h
e
s
,
 
a
n
d
 
p
r
o
x
i
e
s
 
a
l
l
 
r
e
t
r
y
.
 
T
h
e
 
s
e
r
v
e
r
 
m
u
s
t
 
b
e
 
t
h
e
 
s
o
u
r
c
e
 
o
f
 
t
r
u
t
h
 
f
o
r
 
'
h
a
v
e
 
I
 
s
e
e
n
 
t
h
i
s
 
k
e
y
 
b
e
f
o
r
e
'
 
s
o
 
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
 
a
r
e
 
r
e
t
u
r
n
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
 
a
n
s
w
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
 
r
e
-
e
x
e
c
u
t
i
n
g
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
H
o
w
 
l
o
n
g
 
s
h
o
u
l
d
 
a
n
 
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
 
b
e
 
c
a
c
h
e
d
 
o
n
 
t
h
e
 
s
e
r
v
e
r
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
F
o
r
e
v
e
r
.
"
,


 
 
 
 
 
 
 
 
"
L
o
n
g
 
e
n
o
u
g
h
 
t
o
 
c
o
v
e
r
 
c
l
i
e
n
t
 
r
e
t
r
y
 
w
i
n
d
o
w
s
 
(
2
4
h
 
i
s
 
a
 
c
o
m
m
o
n
 
S
t
r
i
p
e
/
A
W
S
 
c
o
n
v
e
n
t
i
o
n
)
 
b
u
t
 
n
o
t
 
s
o
 
l
o
n
g
 
t
h
e
 
c
a
c
h
e
 
b
e
c
o
m
e
s
 
u
n
b
o
u
n
d
e
d
.
"
,


 
 
 
 
 
 
 
 
"
1
 
s
e
c
o
n
d
.
"
,


 
 
 
 
 
 
 
 
"
U
n
t
i
l
 
m
a
n
u
a
l
 
c
l
e
a
n
u
p
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
2
4
 
h
o
u
r
s
 
i
s
 
t
h
e
 
d
e
-
f
a
c
t
o
 
s
t
a
n
d
a
r
d
.
 
L
o
n
g
 
e
n
o
u
g
h
 
t
h
a
t
 
a
l
l
 
r
e
a
s
o
n
a
b
l
e
 
r
e
t
r
i
e
s
 
h
i
t
 
t
h
e
 
c
a
c
h
e
;
 
s
h
o
r
t
 
e
n
o
u
g
h
 
t
h
a
t
 
t
h
e
 
k
e
y
 
s
t
o
r
e
 
d
o
e
s
n
'
t
 
g
r
o
w
 
f
o
r
e
v
e
r
.
 
S
t
r
i
p
e
 
d
o
c
u
m
e
n
t
s
 
t
h
i
s
 
e
x
p
l
i
c
i
t
l
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
W
h
y
 
d
o
e
s
 
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
q
u
i
r
e
 
B
O
T
H
 
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
s
 
A
N
D
 
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
t
 
d
o
e
s
n
'
t
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
 
d
e
d
u
p
e
s
 
r
e
t
r
i
e
s
 
t
o
 
t
h
e
 
s
a
m
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
n
s
u
r
e
 
w
r
i
t
e
s
 
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
 
a
r
e
 
a
l
l
-
o
r
-
n
o
t
h
i
n
g
 
o
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
 
s
i
d
e
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
 
a
r
e
 
o
p
t
i
o
n
a
l
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
c
y
 
w
o
r
k
s
 
o
n
l
y
 
i
n
 
d
e
v
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
 
(
P
I
D
 
+
 
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
 
p
e
r
 
p
a
r
t
i
t
i
o
n
)
 
h
a
n
d
l
e
s
 
r
e
t
r
i
e
s
 
f
r
o
m
 
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
 
s
i
d
e
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
 
w
r
a
p
 
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
 
s
o
 
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
 
s
e
e
s
 
t
h
e
m
 
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
o
g
e
t
h
e
r
 
t
h
e
y
 
g
i
v
e
 
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
'
 
g
u
a
r
a
n
t
e
e
 
K
a
f
k
a
 
m
a
r
k
e
t
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
I
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
 
&
 
E
x
a
c
t
l
y
-
O
n
c
e
"


 
 
 
 
 
 
l
e
v
e
l
=
{
4
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
6
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
R
e
q
u
i
r
e
d
 
r
e
a
d
i
n
g
 
f
o
r
 
a
n
y
 
p
a
y
m
e
n
t
s
,
 
o
r
d
e
r
i
n
g
,
 
o
r
 
m
e
s
s
a
g
e
-
b
u
s
 
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


