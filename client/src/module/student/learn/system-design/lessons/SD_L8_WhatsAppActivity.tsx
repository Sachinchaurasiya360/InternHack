
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
h
e
c
k
,
 
G
l
o
b
e
,
 
M
e
s
s
a
g
e
S
q
u
a
r
e
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
 
F
r
a
m
e
w
o
r
k
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
S
T
E
P
S
 
=
 
[


 
 
{


 
 
 
 
k
:
 
"
1
.
 
R
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
s
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


 
 
 
 
i
t
e
m
s
:
 
[


 
 
 
 
 
 
"
F
u
n
c
t
i
o
n
a
l
:
 
1
:
1
 
m
e
s
s
a
g
e
,
 
g
r
o
u
p
 
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
y
 
&
 
r
e
a
d
 
r
e
c
e
i
p
t
s
,
 
o
n
l
i
n
e
 
p
r
e
s
e
n
c
e
.
"
,


 
 
 
 
 
 
"
N
o
n
-
f
u
n
c
t
i
o
n
a
l
:
 
e
n
d
-
t
o
-
e
n
d
 
l
a
t
e
n
c
y
 
p
9
9
 
<
 
1
s
 
w
h
e
n
 
b
o
t
h
 
o
n
l
i
n
e
,
 
d
u
r
a
b
l
e
 
w
h
e
n
 
o
f
f
l
i
n
e
 
(
d
e
l
i
v
e
r
 
o
n
 
r
e
c
o
n
n
e
c
t
)
.
"
,


 
 
 
 
 
 
"
O
u
t
 
o
f
 
s
c
o
p
e
:
 
v
o
i
c
e
/
v
i
d
e
o
 
c
a
l
l
s
,
 
e
n
d
-
t
o
-
e
n
d
 
e
n
c
r
y
p
t
i
o
n
 
d
e
t
a
i
l
s
,
 
m
e
d
i
a
 
c
o
m
p
r
e
s
s
i
o
n
.
"
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
k
:
 
"
2
.
 
E
s
t
i
m
a
t
i
o
n
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


 
 
 
 
i
t
e
m
s
:
 
[


 
 
 
 
 
 
"
2
 
b
i
l
l
i
o
n
 
u
s
e
r
s
,
 
~
1
 
b
i
l
l
i
o
n
 
d
a
i
l
y
 
a
c
t
i
v
e
.
 
1
0
0
 
b
i
l
l
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
/
d
a
y
 
→
 
~
1
.
2
M
 
s
e
n
d
s
/
s
e
c
 
a
v
e
r
a
g
e
,
 
p
e
a
k
 
~
5
M
.
"
,


 
 
 
 
 
 
"
C
o
n
c
u
r
r
e
n
t
 
c
o
n
n
e
c
t
e
d
 
u
s
e
r
s
:
 
~
5
0
0
M
.
 
P
e
r
-
u
s
e
r
 
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
 
~
1
0
K
B
 
→
 
5
 
T
B
 
t
o
t
a
l
 
R
A
M
 
a
c
r
o
s
s
 
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
e
r
v
e
r
s
.
"
,


 
 
 
 
 
 
"
A
v
g
 
m
e
s
s
a
g
e
 
+
 
m
e
t
a
d
a
t
a
:
 
~
2
0
0
 
b
y
t
e
s
.
 
S
t
o
r
a
g
e
:
 
1
0
0
B
 
×
 
3
6
5
 
×
 
2
0
0
B
 
≈
 
7
 
P
B
/
y
e
a
r
 
(
w
i
t
h
 
r
e
t
e
n
t
i
o
n
 
p
o
l
i
c
y
)
.
"
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
k
:
 
"
3
.
 
A
P
I
 
+
 
D
a
t
a
 
M
o
d
e
l
"
,


 
 
 
 
c
o
l
o
r
:
 
P
U
R
P
L
E
,


 
 
 
 
i
t
e
m
s
:
 
[


 
 
 
 
 
 
"
W
S
 
/
c
h
a
t
 
(
p
e
r
s
i
s
t
e
n
t
)
 
·
 
P
O
S
T
 
/
m
e
s
s
a
g
e
s
 
·
 
G
E
T
 
/
m
e
s
s
a
g
e
s
?
s
i
n
c
e
=
<
o
f
f
s
e
t
>
"
,


 
 
 
 
 
 
"
m
e
s
s
a
g
e
s
(
i
d
,
 
s
e
n
d
e
r
,
 
r
e
c
i
p
i
e
n
t
,
 
t
e
x
t
,
 
s
e
n
t
_
a
t
,
 
d
e
l
i
v
e
r
e
d
_
a
t
?
,
 
r
e
a
d
_
a
t
?
)
 
—
 
s
h
a
r
d
e
d
 
b
y
 
c
o
n
v
e
r
s
a
t
i
o
n
"
,


 
 
 
 
 
 
"
p
r
e
s
e
n
c
e
(
u
s
e
r
_
i
d
,
 
l
a
s
t
_
s
e
e
n
,
 
i
s
_
o
n
l
i
n
e
)
 
i
n
 
R
e
d
i
s
 
w
i
t
h
 
s
h
o
r
t
 
T
T
L
"
,


 
 
 
 
 
 
"
d
e
v
i
c
e
 
s
e
s
s
i
o
n
s
(
u
s
e
r
_
i
d
,
 
d
e
v
i
c
e
_
i
d
,
 
s
e
r
v
e
r
_
i
d
)
 
s
o
 
w
e
 
k
n
o
w
 
w
h
i
c
h
 
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
e
r
v
e
r
 
h
o
l
d
s
 
e
a
c
h
 
d
e
v
i
c
e
"
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
k
:
 
"
4
.
 
H
i
g
h
-
l
e
v
e
l
 
D
i
a
g
r
a
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
,


 
 
 
 
i
t
e
m
s
:
 
[


 
 
 
 
 
 
"
C
l
i
e
n
t
 
→
 
W
e
b
S
o
c
k
e
t
 
→
 
C
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
e
r
v
e
r
 
(
s
t
i
c
k
y
)
 
→
 
M
e
s
s
a
g
e
 
r
o
u
t
e
r
 
(
K
a
f
k
a
)
 
→
 
r
e
c
i
p
i
e
n
t
'
s
 
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
e
r
v
e
r
.
"
,


 
 
 
 
 
 
"
I
f
 
r
e
c
i
p
i
e
n
t
 
o
f
f
l
i
n
e
:
 
m
e
s
s
a
g
e
 
q
u
e
u
e
d
 
i
n
 
t
h
e
i
r
 
i
n
b
o
x
,
 
d
e
l
i
v
e
r
e
d
 
o
n
 
r
e
c
o
n
n
e
c
t
.
"
,


 
 
 
 
 
 
"
R
e
c
e
i
p
t
 
p
a
t
h
:
 
r
e
c
i
p
i
e
n
t
 
a
c
k
s
 
d
e
l
i
v
e
r
y
 
→
 
s
e
n
d
e
r
'
s
 
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
e
r
v
e
r
 
g
e
t
s
 
b
a
c
k
 
t
h
e
 
s
e
c
o
n
d
 
t
i
c
k
.
"
,


 
 
 
 
]
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
 
F
r
a
m
e
w
o
r
k
A
p
p
l
i
e
d
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
e
 
4
-
s
t
e
p
 
f
r
a
m
e
w
o
r
k
,
 
a
p
p
l
i
e
d
 
t
o
 
W
h
a
t
s
A
p
p
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


 
 
 
 
 
 
 
 
C
h
a
t
 
i
s
 
m
o
s
t
l
y
 
a
b
o
u
t
 
r
e
l
i
a
b
l
e
 
p
e
r
s
i
s
t
e
n
t
 
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
 
+
 
a
 
s
t
a
t
e
f
u
l
 
d
e
l
i
v
e
r
y
 
s
t
a
t
e
 
m
a
c
h
i
n
e


 
 
 
 
 
 
 
 
p
e
r
 
m
e
s
s
a
g
e
.
 
E
n
c
r
y
p
t
i
o
n
 
i
s
 
l
a
y
e
r
e
d
 
o
n
 
t
o
p
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
2
 
g
a
p
-
3
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
S
T
E
P
S
.
m
a
p
(
(
s
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
s
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
2
 
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
s
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
s
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
7
8
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
 
s
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
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
u
l
 
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
 
p
a
d
d
i
n
g
:
 
0
,
 
l
i
s
t
S
t
y
l
e
:
 
"
n
o
n
e
"
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
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
i
t
e
m
s
.
m
a
p
(
(
i
t
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
 
k
e
y
=
{
i
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
 
s
.
c
o
l
o
r
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
 
}
}
>
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
>
{
i
t
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
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
u
l
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
 
A
n
i
m
a
t
e
d
 
3
-
t
i
c
k
 
s
t
a
t
e
 
m
a
c
h
i
n
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




t
y
p
e
 
T
i
c
k
 
=
 
"
n
o
n
e
"
 
|
 
"
s
e
n
t
"
 
|
 
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
r
e
a
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
 
C
h
a
t
M
s
g
 
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
 
t
e
x
t
:
 
s
t
r
i
n
g
;
 
t
i
c
k
:
 
T
i
c
k
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
 
T
i
c
k
D
e
m
o
(
)
 
{


 
 
c
o
n
s
t
 
[
r
e
c
i
p
i
e
n
t
O
n
l
i
n
e
,
 
s
e
t
R
e
c
i
p
i
e
n
t
O
n
l
i
n
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
t
r
u
e
)
;


 
 
c
o
n
s
t
 
[
r
e
c
i
p
i
e
n
t
O
p
e
n
e
d
,
 
s
e
t
R
e
c
i
p
i
e
n
t
O
p
e
n
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
m
e
s
s
a
g
e
s
,
 
s
e
t
M
e
s
s
a
g
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
C
h
a
t
M
s
g
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
r
a
f
t
,
 
s
e
t
D
r
a
f
t
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
H
e
y
,
 
f
r
e
e
 
t
o
n
i
g
h
t
?
"
)
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
 
=
 
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
d
r
a
f
t
.
t
r
i
m
(
)
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
 
i
d
 
=
 
D
a
t
e
.
n
o
w
(
)
;


 
 
 
 
c
o
n
s
t
 
m
s
g
:
 
C
h
a
t
M
s
g
 
=
 
{
 
i
d
,
 
t
e
x
t
:
 
d
r
a
f
t
,
 
t
i
c
k
:
 
"
n
o
n
e
"
 
}
;


 
 
 
 
s
e
t
M
e
s
s
a
g
e
s
(
(
m
s
)
 
=
>
 
[
.
.
.
m
s
,
 
m
s
g
]
)
;


 
 
 
 
s
e
t
D
r
a
f
t
(
"
"
)
;




 
 
 
 
/
/
 
s
e
n
t
 
i
m
m
e
d
i
a
t
e
l
y
 
o
n
 
s
e
n
d


 
 
 
 
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
M
e
s
s
a
g
e
s
(
(
m
s
)
 
=
>
 
m
s
.
m
a
p
(
(
m
)
 
=
>
 
(
m
.
i
d
 
=
=
=
 
i
d
 
?
 
{
 
.
.
.
m
,
 
t
i
c
k
:
 
"
s
e
n
t
"
 
a
s
 
T
i
c
k
 
}
 
:
 
m
)
)
)
,
 
2
0
0
)
;




 
 
 
 
/
/
 
d
e
l
i
v
e
r
e
d
:
 
o
n
l
y
 
i
f
 
r
e
c
i
p
i
e
n
t
 
o
n
l
i
n
e


 
 
 
 
i
f
 
(
r
e
c
i
p
i
e
n
t
O
n
l
i
n
e
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
M
e
s
s
a
g
e
s
(
(
m
s
)
 
=
>
 
m
s
.
m
a
p
(
(
m
)
 
=
>
 
(
m
.
i
d
 
=
=
=
 
i
d
 
?
 
{
 
.
.
.
m
,
 
t
i
c
k
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
 
a
s
 
T
i
c
k
 
}
 
:
 
m
)
)
)
,
 
9
0
0
)
;


 
 
 
 
 
 
/
/
 
r
e
a
d
:
 
o
n
l
y
 
i
f
 
r
e
c
i
p
i
e
n
t
 
h
a
s
 
c
h
a
t
 
o
p
e
n


 
 
 
 
 
 
i
f
 
(
r
e
c
i
p
i
e
n
t
O
p
e
n
e
d
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
M
e
s
s
a
g
e
s
(
(
m
s
)
 
=
>
 
m
s
.
m
a
p
(
(
m
)
 
=
>
 
(
m
.
i
d
 
=
=
=
 
i
d
 
?
 
{
 
.
.
.
m
,
 
t
i
c
k
:
 
"
r
e
a
d
"
 
a
s
 
T
i
c
k
 
}
 
:
 
m
)
)
)
,
 
1
8
0
0
)
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
}
;




 
 
/
/
 
w
h
e
n
 
r
e
c
i
p
i
e
n
t
 
c
o
m
e
s
 
o
n
l
i
n
e
,
 
d
e
l
i
v
e
r
 
a
n
y
 
p
e
n
d
i
n
g
 
m
e
s
s
a
g
e
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
r
e
c
i
p
i
e
n
t
O
n
l
i
n
e
)
 
{


 
 
 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
s
e
t
-
s
t
a
t
e
-
i
n
-
e
f
f
e
c
t


 
 
 
 
 
 
s
e
t
M
e
s
s
a
g
e
s
(
(
m
s
)
 
=
>
 
m
s
.
m
a
p
(
(
m
)
 
=
>
 
(
m
.
t
i
c
k
 
=
=
=
 
"
s
e
n
t
"
 
?
 
{
 
.
.
.
m
,
 
t
i
c
k
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
 
a
s
 
T
i
c
k
 
}
 
:
 
m
)
)
)
;


 
 
 
 
 
 
i
f
 
(
r
e
c
i
p
i
e
n
t
O
p
e
n
e
d
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
M
e
s
s
a
g
e
s
(
(
m
s
)
 
=
>
 
m
s
.
m
a
p
(
(
m
)
 
=
>
 
(
m
.
t
i
c
k
 
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
 
{
 
.
.
.
m
,
 
t
i
c
k
:
 
"
r
e
a
d
"
 
a
s
 
T
i
c
k
 
}
 
:
 
m
)
)
)
,
 
6
0
0
)
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
}
,
 
[
r
e
c
i
p
i
e
n
t
O
n
l
i
n
e
,
 
r
e
c
i
p
i
e
n
t
O
p
e
n
e
d
]
)
;




 
 
/
/
 
w
h
e
n
 
r
e
c
i
p
i
e
n
t
 
o
p
e
n
s
 
c
h
a
t


 
 
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
r
e
c
i
p
i
e
n
t
O
p
e
n
e
d
 
&
&
 
r
e
c
i
p
i
e
n
t
O
n
l
i
n
e
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
M
e
s
s
a
g
e
s
(
(
m
s
)
 
=
>
 
m
s
.
m
a
p
(
(
m
)
 
=
>
 
(
m
.
t
i
c
k
 
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
 
{
 
.
.
.
m
,
 
t
i
c
k
:
 
"
r
e
a
d
"
 
a
s
 
T
i
c
k
 
}
 
:
 
m
)
)
)
,
 
6
0
0
)
;


 
 
 
 
}


 
 
}
,
 
[
r
e
c
i
p
i
e
n
t
O
p
e
n
e
d
,
 
r
e
c
i
p
i
e
n
t
O
n
l
i
n
e
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
M
e
s
s
a
g
e
s
(
[
]
)
;
 
s
e
t
R
e
c
i
p
i
e
n
t
O
n
l
i
n
e
(
t
r
u
e
)
;
 
s
e
t
R
e
c
i
p
i
e
n
t
O
p
e
n
e
d
(
f
a
l
s
e
)
;
 
s
e
t
D
r
a
f
t
(
"
H
e
y
,
 
f
r
e
e
 
t
o
n
i
g
h
t
?
"
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
T
h
e
 
t
w
o
-
t
i
c
k
 
s
t
a
t
e
 
m
a
c
h
i
n
e
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


 
 
 
 
 
 
 
 
S
e
n
d
 
a
 
m
e
s
s
a
g
e
.
 
T
o
g
g
l
e
 
w
h
e
t
h
e
r
 
t
h
e
 
r
e
c
i
p
i
e
n
t
 
i
s
 
o
n
l
i
n
e
 
a
n
d
 
w
h
e
t
h
e
r
 
t
h
e
y
&
r
s
q
u
o
;
v
e
 
o
p
e
n
e
d
 
t
h
e


 
 
 
 
 
 
 
 
c
h
a
t
.
 
W
a
t
c
h
 
t
h
e
 
t
i
c
k
s
 
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
 
g
r
a
y
 
c
l
o
c
k
 
(
s
e
n
d
i
n
g
)
 
→
 
s
i
n
g
l
e
 
c
h
e
c
k
 
(
s
e
n
t
 
t
o
 
s
e
r
v
e
r
)
 
→


 
 
 
 
 
 
 
 
d
o
u
b
l
e
 
g
r
a
y
 
(
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
o
 
d
e
v
i
c
e
)
 
→
 
d
o
u
b
l
e
 
b
l
u
e
 
(
r
e
a
d
)
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
r
e
c
i
p
i
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
R
e
c
i
p
i
e
n
t
O
n
l
i
n
e
(
(
o
)
 
=
>
 
!
o
)
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
6
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
e
c
i
p
i
e
n
t
O
n
l
i
n
e
 
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
5
5
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
e
c
i
p
i
e
n
t
O
n
l
i
n
e
 
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
 
`
$
{
N
E
U
T
R
A
L
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
e
c
i
p
i
e
n
t
O
n
l
i
n
e
 
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


 
 
 
 
 
 
 
 
 
 
{
r
e
c
i
p
i
e
n
t
O
n
l
i
n
e
 
?
 
"
O
N
L
I
N
E
"
 
:
 
"
O
F
F
L
I
N
E
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
R
e
c
i
p
i
e
n
t
O
p
e
n
e
d
(
(
o
)
 
=
>
 
!
o
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
r
e
c
i
p
i
e
n
t
O
n
l
i
n
e
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
6
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
e
c
i
p
i
e
n
t
O
n
l
i
n
e
 
?
 
"
p
o
i
n
t
e
r
"
 
:
 
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
e
c
i
p
i
e
n
t
O
p
e
n
e
d
 
?
 
P
U
R
P
L
E
 
:
 
N
E
U
T
R
A
L
}
5
5
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
e
c
i
p
i
e
n
t
O
p
e
n
e
d
 
?
 
`
$
{
P
U
R
P
L
E
}
1
8
`
 
:
 
`
$
{
N
E
U
T
R
A
L
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
e
c
i
p
i
e
n
t
O
p
e
n
e
d
 
?
 
P
U
R
P
L
E
 
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
e
c
i
p
i
e
n
t
O
n
l
i
n
e
 
?
 
1
 
:
 
0
.
5
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
r
e
c
i
p
i
e
n
t
O
p
e
n
e
d
 
?
 
"
C
H
A
T
 
O
P
E
N
"
 
:
 
"
C
H
A
T
 
C
L
O
S
E
D
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
 
1
8
 
}
}
>


 
 
 
 
 
 
 
 
{
/
*
 
c
h
a
t
 
m
e
s
s
a
g
e
s
 
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
8
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


 
 
 
 
 
 
 
 
 
 
{
m
e
s
s
a
g
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
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
 
a
 
m
e
s
s
a
g
e
 
a
n
d
 
p
r
e
s
s
 
s
e
n
d


 
 
 
 
 
 
 
 
 
 
 
 
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
m
e
s
s
a
g
e
s
.
m
a
p
(
(
m
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
m
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
y
o
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
6
 
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
2
5
 
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
 
a
l
i
g
n
S
e
l
f
:
 
"
f
l
e
x
-
e
n
d
"
,
 
m
a
x
W
i
d
t
h
:
 
"
7
0
%
"
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
e
n
d
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
 
1
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
8
p
x
 
1
2
p
x
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
8
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
.
t
e
x
t
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
:
 
N
E
U
T
R
A
L
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
 
4
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
 
g
a
p
:
 
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
j
u
s
t
 
n
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
T
i
c
k
I
c
o
n
 
t
i
c
k
=
{
m
.
t
i
c
k
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


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
c
o
m
p
o
s
e
 
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
4
"
>


 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
d
r
a
f
t
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
D
r
a
f
t
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
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
K
e
y
D
o
w
n
=
{
(
e
)
 
=
>
 
{
 
i
f
 
(
e
.
k
e
y
 
=
=
=
 
"
E
n
t
e
r
"
)
 
s
e
n
d
(
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
m
e
s
s
a
g
e
…
"


 
 
 
 
 
 
 
 
 
 
 
 
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
0
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
.
5
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
 
o
u
t
l
i
n
e
:
 
"
n
o
n
e
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
r
e
m
"
 
}
}


 
 
 
 
 
 
 
 
 
 
/
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
d
r
a
f
t
.
t
r
i
m
(
)
}
 
s
t
y
l
e
=
{
b
t
n
(
S
D
,
 
!
d
r
a
f
t
.
t
r
i
m
(
)
)
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
b
t
n
(
N
E
U
T
R
A
L
,
 
f
a
l
s
e
)
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
 
6
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
R
i
g
h
t
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
S
T
A
T
E
 
M
A
C
H
I
N
E


 
 
 
 
 
 
 
 
 
 
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
⏱
 
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
s
e
n
d
i
n
g
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
"
 
→
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
✓
 
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
s
e
n
t
 
(
s
e
r
v
e
r
 
h
a
s
 
i
t
)
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
"
 
→
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
✓
✓
 
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
d
e
l
i
v
e
r
e
d
 
(
d
e
v
i
c
e
 
r
e
c
e
i
v
e
d
)
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
"
 
→
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
✓
✓
 
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
 
P
U
R
P
L
E
 
}
}
>
r
e
a
d
 
(
c
h
a
t
 
o
p
e
n
e
d
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
 
T
i
c
k
I
c
o
n
(
{
 
t
i
c
k
 
}
:
 
{
 
t
i
c
k
:
 
T
i
c
k
 
}
)
 
{


 
 
i
f
 
(
t
i
c
k
 
=
=
=
 
"
n
o
n
e
"
)
 
r
e
t
u
r
n
 
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
⏱
<
/
s
p
a
n
>
;


 
 
i
f
 
(
t
i
c
k
 
=
=
=
 
"
s
e
n
t
"
)
 
r
e
t
u
r
n
 
<
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
3
.
5
 
h
-
3
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
 
/
>
;


 
 
i
f
 
(
t
i
c
k
 
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
)


 
 
 
 
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
 
}
}
>


 
 
 
 
 
 
 
 
<
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
3
.
5
 
h
-
3
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
 
-
8
 
}
}
 
/
>


 
 
 
 
 
 
 
 
<
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
3
.
5
 
h
-
3
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
 
/
>


 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
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
 
}
}
>


 
 
 
 
 
 
<
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
3
.
5
 
h
-
3
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
 
c
o
l
o
r
:
 
P
U
R
P
L
E
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
 
-
8
 
}
}
 
/
>


 
 
 
 
 
 
<
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
3
.
5
 
h
-
3
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
 
c
o
l
o
r
:
 
P
U
R
P
L
E
 
}
}
 
/
>


 
 
 
 
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
 
b
t
n
(
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
,
 
d
i
s
a
b
l
e
d
:
 
b
o
o
l
e
a
n
)
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
 
{


 
 
r
e
t
u
r
n
 
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
 
d
i
s
a
b
l
e
d
 
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
c
o
l
o
r
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
8
`
,
 
c
o
l
o
r
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
 
d
i
s
a
b
l
e
d
 
?
 
0
.
5
 
:
 
1
,


 
 
}
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
 
C
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
e
r
v
e
r
s
 
a
n
d
 
r
o
u
t
i
n
g
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
P
I
E
C
E
S
 
=
 
[


 
 
{
 
k
:
 
"
C
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
e
r
v
e
r
s
"
,
 
v
:
 
"
E
a
c
h
 
h
o
l
d
s
 
a
 
c
h
u
n
k
 
o
f
 
W
e
b
S
o
c
k
e
t
 
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
.
 
1
0
0
k
 
W
S
/
s
e
r
v
e
r
 
i
s
 
c
o
m
f
o
r
t
a
b
l
e
;
 
5
M
 
u
s
e
r
s
 
→
 
5
0
+
 
s
e
r
v
e
r
s
.
"
 
}
,


 
 
{
 
k
:
 
"
S
t
i
c
k
y
 
s
e
s
s
i
o
n
s
"
,
 
v
:
 
"
U
s
e
r
 
r
e
c
o
n
n
e
c
t
s
 
m
u
s
t
 
r
e
a
c
h
 
t
h
e
 
s
a
m
e
 
s
e
r
v
e
r
 
(
o
r
 
t
h
e
 
r
o
u
t
i
n
g
 
t
a
b
l
e
 
u
p
d
a
t
e
s
 
s
o
 
m
e
s
s
a
g
e
s
 
f
i
n
d
 
t
h
e
 
n
e
w
 
o
n
e
)
.
 
S
t
a
n
d
a
r
d
 
p
a
t
t
e
r
n
:
 
h
a
s
h
 
o
n
 
u
s
e
r
_
i
d
.
"
 
}
,


 
 
{
 
k
:
 
"
S
e
s
s
i
o
n
 
r
e
g
i
s
t
r
y
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
 
m
a
p
:
 
u
s
e
r
_
i
d
 
→
 
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
_
s
e
r
v
e
r
.
 
U
p
d
a
t
e
d
 
o
n
 
c
o
n
n
e
c
t
/
d
i
s
c
o
n
n
e
c
t
.
 
U
s
e
d
 
b
y
 
e
v
e
r
y
 
s
e
n
d
 
t
o
 
f
i
n
d
 
t
h
e
 
r
e
c
i
p
i
e
n
t
'
s
 
c
u
r
r
e
n
t
 
s
e
r
v
e
r
.
"
 
}
,


 
 
{
 
k
:
 
"
M
e
s
s
a
g
e
 
b
r
o
k
e
r
"
,
 
v
:
 
"
K
a
f
k
a
 
t
o
p
i
c
 
p
e
r
 
s
h
a
r
d
,
 
r
o
u
t
e
d
 
b
y
 
r
e
c
i
p
i
e
n
t
_
i
d
.
 
D
e
c
o
u
p
l
e
s
 
s
e
n
d
e
r
'
s
 
s
e
r
v
e
r
 
f
r
o
m
 
r
e
c
i
p
i
e
n
t
'
s
,
 
a
l
l
o
w
s
 
s
e
r
v
e
r
 
f
a
i
l
o
v
e
r
 
w
i
t
h
o
u
t
 
l
o
s
i
n
g
 
m
e
s
s
a
g
e
s
.
"
 
}
,


 
 
{
 
k
:
 
"
O
f
f
l
i
n
e
 
q
u
e
u
e
"
,
 
v
:
 
"
I
f
 
r
e
c
i
p
i
e
n
t
 
i
s
 
o
f
f
l
i
n
e
,
 
w
r
i
t
e
 
t
o
 
d
u
r
a
b
l
e
 
q
u
e
u
e
 
k
e
y
e
d
 
b
y
 
u
s
e
r
_
i
d
.
 
O
n
 
r
e
c
o
n
n
e
c
t
,
 
t
h
e
 
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
e
r
v
e
r
 
d
r
a
i
n
s
 
t
h
e
 
q
u
e
u
e
 
f
i
r
s
t
.
"
 
}
,


 
 
{
 
k
:
 
"
G
r
o
u
p
 
f
a
n
-
o
u
t
"
,
 
v
:
 
"
2
0
0
-
m
e
m
b
e
r
 
g
r
o
u
p
 
→
 
w
r
i
t
e
 
2
0
0
 
i
n
b
o
x
 
e
n
t
r
i
e
s
 
o
n
 
s
e
n
d
.
 
B
o
u
n
d
e
d
 
b
e
c
a
u
s
e
 
g
r
o
u
p
 
s
i
z
e
s
 
a
r
e
 
c
a
p
p
e
d
 
(
~
1
0
2
4
)
.
"
 
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
 
P
i
e
c
e
s
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
e
 
p
i
e
c
e
s
 
b
e
h
i
n
d
 
a
 
s
i
n
g
l
e
 
m
e
s
s
a
g
e
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


 
 
 
 
 
 
 
 
F
r
o
m
 
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
&
r
d
q
u
o
;
 
t
o
 
a
 
r
e
c
i
p
i
e
n
t
&
r
s
q
u
o
;
s
 
p
h
o
n
e
,
 
a
 
m
e
s
s
a
g
e
 
t
o
u
c
h
e
s
 
a
t
 
l
e
a
s
t
 
4
 
d
i
s
t
i
n
c
t


 
 
 
 
 
 
 
 
s
e
r
v
i
c
e
s
.
 
S
i
x
 
p
i
e
c
e
s
 
e
v
e
r
y
 
W
h
a
t
s
A
p
p
-
s
t
y
l
e
 
d
e
s
i
g
n
 
m
u
s
t
 
a
d
d
r
e
s
s
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
6
 
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
2
 
g
a
p
-
3
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
P
I
E
C
E
S
.
m
a
p
(
(
p
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
p
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
H
o
v
e
r
=
{
{
 
y
:
 
-
2
 
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
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
4
0
0
,
 
d
a
m
p
i
n
g
:
 
2
5
 
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
p
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
p
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
8
_
W
h
a
t
s
A
p
p
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
f
r
a
m
e
w
o
r
k
"
,
 
l
a
b
e
l
:
 
"
F
r
a
m
e
w
o
r
k
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
F
r
a
m
e
w
o
r
k
A
p
p
l
i
e
d
 
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
i
c
k
s
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
i
c
k
 
S
t
a
t
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
M
e
s
s
a
g
e
S
q
u
a
r
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
T
i
c
k
D
e
m
o
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
p
i
e
c
e
s
"
,
 
l
a
b
e
l
:
 
"
B
e
h
i
n
d
 
t
h
e
 
S
c
e
n
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
P
i
e
c
e
s
 
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
R
e
c
i
p
i
e
n
t
 
i
s
 
o
f
f
l
i
n
e
 
w
h
e
n
 
y
o
u
 
s
e
n
d
.
 
W
h
a
t
 
h
a
p
p
e
n
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
M
e
s
s
a
g
e
 
i
s
 
d
r
o
p
p
e
d
.
"
,


 
 
 
 
 
 
 
 
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
 
m
e
s
s
a
g
e
 
i
n
 
t
h
e
 
r
e
c
i
p
i
e
n
t
'
s
 
i
n
b
o
x
 
q
u
e
u
e
.
 
O
n
 
r
e
c
o
n
n
e
c
t
,
 
t
h
e
 
q
u
e
u
e
 
d
r
a
i
n
s
 
t
o
 
t
h
e
i
r
 
d
e
v
i
c
e
,
 
t
i
c
k
s
 
f
l
i
p
 
f
r
o
m
 
s
e
n
t
 
→
 
d
e
l
i
v
e
r
e
d
.
"
,


 
 
 
 
 
 
 
 
"
M
e
s
s
a
g
e
 
b
o
u
n
c
e
s
.
"
,


 
 
 
 
 
 
 
 
"
S
e
n
d
e
r
 
r
e
t
r
i
e
s
 
f
o
r
e
v
e
r
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
O
f
f
l
i
n
e
 
=
 
s
i
n
g
l
e
 
t
i
c
k
 
(
s
e
n
t
 
t
o
 
s
e
r
v
e
r
)
.
 
S
e
r
v
e
r
 
h
o
l
d
s
 
i
t
 
d
u
r
a
b
l
y
.
 
W
h
e
n
 
r
e
c
i
p
i
e
n
t
'
s
 
d
e
v
i
c
e
 
n
e
x
t
 
c
o
n
n
e
c
t
s
,
 
s
e
r
v
e
r
 
p
u
s
h
e
s
 
p
e
n
d
i
n
g
 
m
e
s
s
a
g
e
s
 
a
n
d
 
t
h
e
 
t
i
c
k
 
a
d
v
a
n
c
e
s
 
t
o
 
d
e
l
i
v
e
r
e
d
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
 
d
o
e
s
 
t
h
e
 
s
y
s
t
e
m
 
f
i
n
d
 
w
h
i
c
h
 
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
e
r
v
e
r
 
h
o
l
d
s
 
a
 
g
i
v
e
n
 
r
e
c
i
p
i
e
n
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
r
o
a
d
c
a
s
t
s
 
t
o
 
a
l
l
 
s
e
r
v
e
r
s
.
"
,


 
 
 
 
 
 
 
 
"
A
 
s
e
s
s
i
o
n
 
r
e
g
i
s
t
r
y
 
(
R
e
d
i
s
)
 
m
a
p
s
 
u
s
e
r
_
i
d
 
→
 
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
_
s
e
r
v
e
r
.
 
S
e
n
d
e
r
'
s
 
s
e
r
v
e
r
 
l
o
o
k
s
 
u
p
,
 
r
o
u
t
e
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
 
t
h
e
r
e
.
"
,


 
 
 
 
 
 
 
 
"
D
N
S
 
l
o
o
k
u
p
.
"
,


 
 
 
 
 
 
 
 
"
R
a
n
d
o
m
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
D
i
r
e
c
t
 
b
r
o
a
d
c
a
s
t
 
w
o
u
l
d
n
'
t
 
s
c
a
l
e
.
 
T
h
e
 
r
e
g
i
s
t
r
y
 
i
s
 
t
h
e
 
r
o
u
t
i
n
g
 
t
a
b
l
e
.
 
U
p
d
a
t
e
d
 
o
n
 
c
o
n
n
e
c
t
/
d
i
s
c
o
n
n
e
c
t
.
 
C
o
m
b
i
n
e
d
 
w
i
t
h
 
K
a
f
k
a
 
p
e
r
-
s
h
a
r
d
 
t
o
p
i
c
s
,
 
g
i
v
e
s
 
r
e
l
i
a
b
l
e
 
r
o
u
t
i
n
g
 
e
v
e
n
 
d
u
r
i
n
g
 
f
a
i
l
o
v
e
r
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
 
i
s
 
t
h
e
 
t
h
i
r
d
 
t
i
c
k
 
(
r
e
a
d
)
 
b
l
u
e
 
/
 
c
o
l
o
r
e
d
,
 
w
h
i
l
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
 
i
s
 
g
r
a
y
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
e
c
o
r
a
t
i
o
n
.
"
,


 
 
 
 
 
 
 
 
"
R
e
a
d
 
i
s
 
a
 
p
r
i
v
a
c
y
-
s
e
n
s
i
t
i
v
e
 
s
i
g
n
a
l
 
t
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
h
e
 
r
e
c
i
p
i
e
n
t
 
t
o
 
a
c
t
u
a
l
l
y
 
o
p
e
n
 
t
h
e
 
c
h
a
t
 
—
 
v
i
s
u
a
l
l
y
 
d
i
s
t
i
n
g
u
i
s
h
i
n
g
 
i
t
 
l
e
t
s
 
u
s
e
r
s
 
k
n
o
w
 
w
h
e
t
h
e
r
 
t
h
e
i
r
 
m
e
s
s
a
g
e
 
h
a
s
 
b
e
e
n
 
s
e
e
n
,
 
n
o
t
 
j
u
s
t
 
r
e
c
e
i
v
e
d
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
d
 
b
y
 
t
h
e
 
s
p
e
c
.
"
,


 
 
 
 
 
 
 
 
"
F
a
s
t
e
r
 
t
o
 
r
e
n
d
e
r
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
D
e
l
i
v
e
r
e
d
 
=
 
y
o
u
r
 
m
e
s
s
a
g
e
 
r
e
a
c
h
e
d
 
t
h
e
i
r
 
d
e
v
i
c
e
 
b
u
t
 
t
h
e
y
 
m
a
y
 
n
o
t
 
h
a
v
e
 
l
o
o
k
e
d
.
 
R
e
a
d
 
=
 
t
h
e
y
 
a
c
t
u
a
l
l
y
 
o
p
e
n
e
d
 
t
h
e
 
c
h
a
t
.
 
T
h
e
 
v
i
s
u
a
l
 
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
 
(
a
n
d
 
t
o
g
g
l
e
a
b
l
e
 
r
e
a
d
 
r
e
c
e
i
p
t
s
 
i
n
 
s
e
t
t
i
n
g
s
)
 
i
s
 
a
 
d
e
l
i
b
e
r
a
t
e
 
U
X
 
c
h
o
i
c
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
2
0
0
-
m
e
m
b
e
r
 
g
r
o
u
p
,
 
y
o
u
 
s
e
n
d
 
a
 
m
e
s
s
a
g
e
.
 
R
o
u
g
h
l
y
 
h
o
w
 
m
a
n
y
 
w
r
i
t
e
s
 
h
a
p
p
e
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
1
.
"
,


 
 
 
 
 
 
 
 
"
A
b
o
u
t
 
2
0
0
 
i
n
b
o
x
 
e
n
t
r
i
e
s
 
(
o
n
e
 
p
e
r
 
m
e
m
b
e
r
)
 
+
 
1
 
m
e
s
s
a
g
e
 
b
o
d
y
.
 
B
o
u
n
d
e
d
 
b
e
c
a
u
s
e
 
g
r
o
u
p
 
s
i
z
e
 
i
s
 
c
a
p
p
e
d
 
a
t
 
~
1
0
2
4
.
"
,


 
 
 
 
 
 
 
 
"
M
i
l
l
i
o
n
s
.
"
,


 
 
 
 
 
 
 
 
"
Z
e
r
o
,
 
i
t
'
s
 
p
u
l
l
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
G
r
o
u
p
 
f
a
n
-
o
u
t
 
s
c
a
l
e
s
 
w
i
t
h
 
m
e
m
b
e
r
 
c
o
u
n
t
.
 
W
h
a
t
s
A
p
p
 
c
a
p
s
 
g
r
o
u
p
s
 
(
~
1
0
2
4
)
 
s
o
 
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
 
f
a
n
-
o
u
t
 
i
s
 
b
o
u
n
d
e
d
.
 
C
h
a
n
n
e
l
s
 
(
b
r
o
a
d
c
a
s
t
-
s
t
y
l
e
)
 
u
s
e
 
a
 
d
i
f
f
e
r
e
n
t
 
p
u
s
h
-
t
h
e
n
-
p
u
l
l
 
h
y
b
r
i
d
 
s
i
n
c
e
 
t
h
e
y
 
h
a
v
e
 
m
a
n
y
 
m
o
r
e
 
s
u
b
s
c
r
i
b
e
r
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
s
i
g
n
 
W
h
a
t
s
A
p
p
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
T
h
e
 
c
l
a
s
s
i
c
 
'
d
e
s
i
g
n
 
a
 
c
h
a
t
 
s
y
s
t
e
m
'
 
i
n
t
e
r
v
i
e
w
 
q
u
e
s
t
i
o
n
,
 
e
n
d
-
t
o
-
e
n
d
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


